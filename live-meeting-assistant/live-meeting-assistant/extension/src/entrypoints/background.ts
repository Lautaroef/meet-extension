import { defineBackground, browser } from '#imports'; // Using #imports for WXT v0.20+ and try importing browser
import logger from '@/utils/logger';

const OFFSCREEN_DOCUMENT_PATH = 'offscreen.html'; // Corresponds to entrypoints/offscreen/index.html -> offscreen.html in output

// Simplified function to ensure the offscreen document exists
async function ensureOffscreenDocument() {
    const existingContexts = await chrome.runtime.getContexts?.({
        contextTypes: ['OFFSCREEN_DOCUMENT' as chrome.runtime.ContextType],
        documentUrls: [chrome.runtime.getURL(OFFSCREEN_DOCUMENT_PATH)]
    });

    if (existingContexts && existingContexts.length > 0) {
        logger.info('BG SCRIPT: Offscreen document already exists.');
        return;
    }

    logger.info('BG SCRIPT: Attempting to create offscreen document...');
    try {
        await chrome.offscreen.createDocument({
            url: OFFSCREEN_DOCUMENT_PATH,
            reasons: ['USER_MEDIA' as chrome.offscreen.Reason], // Use string literal for Reason
            justification: 'Capture tab audio for processing and transcription.',
        });
        logger.info('BG SCRIPT: Offscreen document created successfully.');
    } catch (error: any) {
        if (error.message.includes('Only a single offscreen document may be created')) {
            logger.warn('BG SCRIPT: Offscreen document creation failed, it likely already exists.', error.message);
        } else {
            logger.error('BG SCRIPT: Error creating offscreen document:', error);
            throw error; // Re-throw if it's a different error
        }
    }
}

export default defineBackground(() => {
  logger.info('Background service worker started.');

  // Example: Listen for extension installation or update
  browser.runtime.onInstalled.addListener(async (details) => {
    logger.info('Extension installed or updated.', { reason: details.reason, previousVersion: details.previousVersion });
    try {
      await ensureOffscreenDocument(); // Ensure offscreen document is ready on install/update
    } catch (e) {
        logger.error("BG SCRIPT: Failed to ensure offscreen document on install:", e);
    }

    // Listen for clicks on the extension's icon (browser action)
    if (!browser?.action) {
      logger.error('BG SCRIPT: browser.action is UNDEFINED at listener registration.');
    } else {
        logger.info('BG SCRIPT: Attempting to add onClicked listener...');
        browser.action.onClicked.addListener(async (tab) => {
          logger.info('BG SCRIPT: !!!!! BROWSER ACTION ONCLICKED TRIGGERED !!!!!');
          logger.info('BG SCRIPT: Browser action clicked.', { tabId: tab.id, url: tab.url });

          try {
              await ensureOffscreenDocument(); // Corrected call
          } catch (e) {
              logger.error("BG SCRIPT: Failed to ensure offscreen document on click:", e);
              return;
          }

          // Define meeting patterns here or access from a shared config
          const meetingPatterns = [
            '*://meet.google.com/*',
            '*://*.zoom.us/wc/*',
            '*://*.webex.com/*',
            '*://*.youtube.com/watch*',
            'chrome-extension://*/mic-loopback-test.html', // Added test page
            // Add other meeting platform patterns as needed
          ];

          // Check if the clicked tab's URL matches any meeting pattern
          // Convert glob-like patterns to simple regex for matching start
          const meetingUrlMatches = (url: string) => meetingPatterns.some(pattern => {
            const regexPattern = pattern.replace(/\*/g, '.*'); // Convert basic wildcards
            // Ensure pattern matches from the start of the URL
            return new RegExp(`^${regexPattern}`).test(url);
          });

          if (tab.id && tab.url && meetingUrlMatches(tab.url)) {
            logger.info('BG SCRIPT: Action clicked on a valid meeting tab.', { tabId: tab.id });
            
            // Get streamId in the service worker (background script)
            try {
              const streamId = await new Promise<string | undefined>((resolve, reject) => {
                chrome.tabCapture.getMediaStreamId({ targetTabId: tab.id }, (id) => {
                  if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                  } else {
                    resolve(id);
                  }
                });
              });

              if (!streamId) {
                logger.error('BG SCRIPT: Failed to get mediaStreamId from background.');
                return; // Don't proceed if streamId is not obtained
              }
              logger.info('BG SCRIPT: Got mediaStreamId in background:', { streamId });

              // Now send this streamId to the offscreen document
              chrome.runtime.sendMessage({
                target: 'offscreen',
                type: 'start-capture',
                tabId: tab.id, // Still useful for context in offscreen if needed beyond streamId
                streamId: streamId // <<<--- SEND THE STREAM ID
              }, (response) => {
                if (chrome.runtime.lastError) {
                  logger.error('BG SCRIPT: Error sending start-capture to offscreen:', chrome.runtime.lastError.message);
                } else {
                  logger.info('BG SCRIPT: Response from offscreen for start-capture:', response);
                }
              });

            } catch (error: any) {
              logger.error('BG SCRIPT: Error calling getMediaStreamId in background:', error.message);
            }

          } else {
            logger.warn('BG SCRIPT: Browser action clicked on a non-meeting tab or tab without URL.', { url: tab.url });
          }
        }); // End of onClicked listener callback
        logger.info('BG SCRIPT: onClicked listener ADDED successfully.');
    } // End of else block for browser.action check
  }); // End of onInstalled listener

  // Example: Basic message listener
  browser.runtime.onMessage.addListener((message: any, sender, sendResponse) => {
    if (message.target === 'background') {
      logger.info('BG SCRIPT: Message received for background from offscreen:', { message });
      if (message.type === 'audio-data') {
        // New handling logic for audio data with source differentiation
        if (message.originalType === 'Float32Array' && Array.isArray(message.data) && message.data.length > 0) {
            logger.info(`BG SCRIPT: ${message.source === 'user-mic' ? 'User Mic' : 'Tab'} audio-data is plain array, reconstructing to Float32Array.`, { source: message.source });
            const float32Array = new Float32Array(message.data);
            if (float32Array.buffer && float32Array.buffer.byteLength > 0) {
                 // Pass the source to the WebSocket sending function
                 sendAudioDataOverWebSocket(float32Array.buffer, message.source);
            } else {
                logger.warn(`BG SCRIPT: Reconstructed Float32Array buffer is null or empty for ${message.source} audio.`, { source: message.source });
            }
        } else if (message.data instanceof ArrayBuffer && message.data.byteLength > 0) { // Fallback for raw ArrayBuffer
            logger.info(`BG SCRIPT: ${message.source === 'user-mic' ? 'User Mic' : 'Tab'} audio-data is direct ArrayBuffer (fallback).`, { source: message.source });
            sendAudioDataOverWebSocket(message.data, message.source);
        } else {
            logger.warn('BG SCRIPT: Received audio-data but it is not in an expected format or is empty.', 
                { data: message.data, type: typeof message.data, originalType: message.originalType, source: message.source, arrayLength: Array.isArray(message.data) ? message.data.length : undefined }
            );
        }
      } else if (message.type === 'capture-error') {
        logger.error(`BG SCRIPT: Received capture-error from offscreen for source: ${message.source || 'unknown'}:`, message.error);
        // TODO: Handle this error, maybe update UI or stop WebSocket
      } else if (message.type === 'capture-started') {
        logger.info('BG SCRIPT: Received capture-started confirmation from offscreen.');
        // Now that capture is confirmed ready in offscreen, setup WebSocket to backend.
        setupWebSocketConnection(); 
      } else if (message.type === 'capture-stopped'){
        logger.info('BG SCRIPT: Received capture-stopped confirmation from offscreen.');
        closeWebSocketConnection();
      }
      sendResponse({ success: true, received: true });
      return true;
    }
    // Keep other message handlers if any (like getBackgroundInfo, pingFromContentScript)
    logger.info('BG SCRIPT: Message received (onMessage entry):', { messageAction: message?.action });
    if (message.action === 'getBackgroundInfo') {
      sendResponse({ info: 'Info from background.', timestamp: Date.now() });
      return true;
    } else if (message.action === 'pingFromContentScript') {
      logger.info('Background received ping from content script', { url: message.url });
      sendResponse({ ack: 'Background received ping at ' + new Date().toISOString(), originalUrl: message.url });
      return true;
    }
    return false; // Indicate that sendResponse will not be called asynchronously for non-targeted messages
  });

  // Add other core logic, event listeners (e.g., for alarms, storage changes) here.
});

let webSocket: WebSocket | null = null;
// Corrected base URL based on documentation/examples
// This URL will point to our Next.js backend WebSocket proxy
const NEXTJS_WEBSOCKET_URL = 'ws://localhost:3001/api/transcribe-socket'; // Use port 3001
// const NEXTJS_EPHEMERAL_TOKEN_URL = 'http://localhost:3000/api/openai/create-transcription-session'; // Not needed by client anymore

async function setupWebSocketConnection() {
  if (webSocket && webSocket.readyState === WebSocket.OPEN) {
    logger.info('BG SCRIPT: WebSocket to backend already open.');
    return;
  }

  // Note: The ephemeral token for OpenAI is now handled by the backend (Subtask 19.2 & 19.3).
  // The extension itself doesn't need to fetch or use it directly for the WebSocket connection to *our* backend if our backend handles it entirely.
  // However, the OpenAI ephemeral token IS needed by the *backend* to connect to OpenAI.
  // The `getEphemeralTokenForOpenAI` call here was a placeholder representing the token the *client* might need.
  // Since our backend proxy (Subtask 19.3) will use the token from Subtask 19.2 to connect to OpenAI,
  // the client (this extension) does not directly need an OpenAI ephemeral token for *its* connection to *our backend*.
  // Authentication for extension-to-backend WS will be handled by Subtask 19.5 (e.g. session cookie, custom header).
  // So, we actually don't need to call getEphemeralTokenForOpenAI() here to establish the WS to our backend.
  // That function was for the old direct-to-OpenAI model which we are not using.
  // I will remove the call to getEphemeralTokenForOpenAI() from this function.

  logger.info('BG SCRIPT: Setting up WebSocket connection to our backend:', { url: NEXTJS_WEBSOCKET_URL });
  webSocket = new WebSocket(NEXTJS_WEBSOCKET_URL);

  webSocket.onopen = () => {
    logger.info('BG SCRIPT: WebSocket connection to backend established.');
    // Send initial configuration message to our backend, which will then configure its connection to OpenAI
    // This config might now need to indicate that it can expect two types of audio or how to handle them.
    const initialExtensionConfig = {
      type: "init_transcription",
      config: {
        language: "en", 
        model: "gpt-4o-transcribe", 
        // Inform backend about potential dual stream, or handle mixing instructions here
        // For now, backend will just receive chunks tagged by 'source'
        expectsDualStream: true 
      }
    };
    webSocket?.send(JSON.stringify(initialExtensionConfig));
    logger.info('BG SCRIPT: Sent init_transcription message to backend (expectsDualStream: true).');

    // TODO: Start sending buffered/queued audio data (from audioProcessorNode.port.onmessage via sendAudioDataOverWebSocket)
  };

  webSocket.onmessage = (event) => {
    logger.info('BG SCRIPT: WebSocket message received from backend:', event.data);
    try {
      const messageData = JSON.parse(event.data as string);
      
      // Based on OpenAI Realtime API transcription event structure
      if (messageData.type === 'conversation.item.input_audio_transcription.delta' && messageData.delta) {
        logger.info('BG SCRIPT: Received transcription delta:', messageData.delta);
        // TODO (Task 21): Send messageData.delta for GEM analysis
      } else if (messageData.type === 'conversation.item.input_audio_transcription.completed' && messageData.transcript) {
        logger.info('BG SCRIPT: Received completed transcript:', messageData.transcript);
        // TODO (Task 21): Send messageData.transcript for GEM analysis / final processing
      } else if (messageData.type === 'error') { // Assuming our backend might proxy OpenAI errors or send its own
        logger.error('BG SCRIPT: Received error message from backend WebSocket:', messageData.error);
      } else {
        logger.warn('BG SCRIPT: Received unhandled message type from backend:', messageData);
      }

      // TODO: Potentially send these to popup or a UI element
      if (messageData.type === 'conversation.item.input_audio_transcription.delta' && messageData.delta) {
        logger.info('TRANSCRIPTION DELTA:', messageData.delta);
      } else if (messageData.type === 'conversation.item.input_audio_transcription.completed' && messageData.transcript) {
        logger.info('TRANSCRIPTION COMPLETED:', messageData.transcript);
      }

    } catch (e: any) {
      logger.error('BG SCRIPT: Error parsing WebSocket message from backend:', e.message, { rawData: event.data });
    }
  };

  webSocket.onerror = (errorEvent) => { // Changed to errorEvent to avoid conflict with global 'error' type
    logger.error('BG SCRIPT: WebSocket error with backend:', errorEvent);
    // TODO: Implement robust error handling and potential reconnection logic to our backend
  };

  webSocket.onclose = (event) => {
    logger.info('BG SCRIPT: WebSocket connection to backend closed:', { code: event.code, reason: event.reason, wasClean: event.wasClean });
    webSocket = null;
    // TODO: Implement reconnection logic to our backend if the closure was unexpected
  };
}

// Function to send data over WebSocket (will be called from audioProcessorNode.port.onmessage)
function sendAudioDataOverWebSocket(data: ArrayBuffer, source: 'tab' | 'user-mic' | undefined) {
  if (webSocket && webSocket.readyState === WebSocket.OPEN) {
    // Backend (Subtask 19.3) expects { type: 'audio_chunk', data: 'base64_encoded_string', source: 'tab'|'user-mic' }
    const base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
    const message = JSON.stringify({ type: 'audio_chunk', data: base64String, source: source || 'unknown' });
    webSocket.send(message);
    // logger.debug(`BG SCRIPT: Sent ${source || 'unknown'} audio data to backend WebSocket.`);
  } else {
    logger.warn(`BG SCRIPT: WebSocket not open. ${source || 'unknown'} audio data not sent.`);
    // TODO: Buffer audio data if WebSocket is not ready / reconnecting
  }
}

function closeWebSocketConnection() {
  if (webSocket) {
    logger.info('BG SCRIPT: Closing WebSocket connection to backend.');
    webSocket.close();
    webSocket = null; // Ensure it's nulled out after close
  }
}
