/// <reference types="@types/chrome" />
import logger from '@/utils/logger';
// Worklet is now back in src/utils/
// REMOVE: import workletUrl from '../../utils/audio-processor.worklet.ts?url'; 

// Offscreen documents run in an extension context, so 'chrome' should be available.
const extApi = chrome;

logger.info('OFFSCREEN: Script loaded.');

// Variables for Tab Capture
let tabMediaStream: MediaStream | null = null;
let tabAudioContext: AudioContext | null = null;
let tabAudioProcessorNode: AudioWorkletNode | null = null;
let tabMediaStreamSource: MediaStreamAudioSourceNode | null = null;
let dummyAudioElement: HTMLAudioElement | null = null; // For tab capture workaround

// Variables for Local Microphone Capture
let userMediaStream: MediaStream | null = null;
let userAudioContext: AudioContext | null = null;
let userAudioProcessorNode: AudioWorkletNode | null = null;
let userMediaStreamSource: MediaStreamAudioSourceNode | null = null;


// Function to handle incoming messages from the background script
extApi.runtime.onMessage.addListener(async (message: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
  logger.info('OFFSCREEN: Message received', { message });

  if (message.target !== 'offscreen') {
    return; // Ignore messages not intended for the offscreen document
  }

  switch (message.type) {
    case 'start-capture':
      if (!message.streamId) {
        logger.error('OFFSCREEN: start-capture message missing streamId for tab capture.');
        sendResponse({ success: false, error: 'Missing streamId for tab capture' });
        return true;
      }
      
      sendResponse({ success: true, status: 'capture-initiation-acknowledged' }); 
      startCapture(message.streamId, message.tabId, message.config || {}); 
      return true; 
    case 'stop-capture':
      stopCapture();
      sendResponse({ success: true });
      break;
    default:
      logger.warn('OFFSCREEN: Unknown message type received:', message.type);
      sendResponse({ success: false, error: 'Unknown message type' });
      break;
  }
  return true; 
});

async function startCapture(streamId: string, targetTabId: number, config: any) {
  logger.info('OFFSCREEN: Attempting to start TAB capture using streamId:', { streamId, targetTabId });
  if (tabMediaStream || userMediaStream) {
    logger.warn('OFFSCREEN: Capture already in progress (either tab or user mic). Stopping existing one first.');
    stopCapture(); 
  }

  const workletFinalPath = extApi.runtime.getURL('worklets/audio-processor.worklet.js');
  logger.info('OFFSCREEN: Using pre-compiled AudioWorklet module path:', { workletFinalPath });

  // --- TAB AUDIO CAPTURE SETUP ---
  try {
    tabMediaStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: 'tab',
          chromeMediaSourceId: streamId,
        },
      } as any, 
      video: { // We still request video to get the stream, but won't process it
        mandatory: {
          chromeMediaSource: 'tab',
          chromeMediaSourceId: streamId,
        }
      } as any, 
    });

    if (!tabMediaStream) {
      logger.error('OFFSCREEN: Tab getUserMedia failed to return a stream.');
      extApi.runtime.sendMessage({ type: 'capture-error', target:'background', error: 'Tab getUserMedia failed' });
      // Attempt to start user mic capture even if tab capture fails for now
    } else {
      logger.info('OFFSCREEN: Tab media (audio+video) capture started via getUserMedia.');
      if (tabMediaStream.getAudioTracks().length > 0) {
        const audioTrack = tabMediaStream.getAudioTracks()[0];
        logger.info('OFFSCREEN: Tab AudioTrack details:', { id: audioTrack.id, enabled: audioTrack.enabled, muted: audioTrack.muted, readyState: audioTrack.readyState, kind: audioTrack.kind, label: audioTrack.label });
        logger.info('OFFSCREEN: Tab AudioTrack settings:', audioTrack.getSettings());
      } else {
        logger.warn('OFFSCREEN: No audio tracks found on the tabMediaStream.');
      }

      logger.info('OFFSCREEN: Applying workaround - attaching tab stream to a muted audio element.');
      dummyAudioElement = document.createElement('audio');
      dummyAudioElement.muted = true;
      dummyAudioElement.srcObject = tabMediaStream;
      dummyAudioElement.play().catch(error => logger.warn('OFFSCREEN: dummyAudioElement.play() rejected (often benign):', error.message));
      logger.info('OFFSCREEN: Dummy audio element for tab stream created and attached.');

      tabAudioContext = new AudioContext(); 
      logger.info('OFFSCREEN: Tab AudioContext created. State:', { state: tabAudioContext.state });
      tabMediaStreamSource = tabAudioContext.createMediaStreamSource(tabMediaStream);
      logger.info('OFFSCREEN: Tab MediaStreamSource created.');
      tabMediaStreamSource.connect(tabAudioContext.destination); // Keep audio flowing
      logger.info('OFFSCREEN: Tab MediaStreamSource connected to its context destination.');
      
      await tabAudioContext.audioWorklet.addModule(workletFinalPath);
      logger.info('OFFSCREEN: Tab AudioWorklet module added.');
      tabAudioProcessorNode = new AudioWorkletNode(tabAudioContext, 'audio-processor');
      logger.info('OFFSCREEN: Tab AudioWorkletNode created.');
      tabMediaStreamSource.connect(tabAudioProcessorNode);
      logger.info('OFFSCREEN: Tab MediaStreamSource also connected to Tab AudioProcessorNode.');

      tabAudioProcessorNode.port.onmessage = (event) => {
        if (event.data instanceof ArrayBuffer && event.data.byteLength > 0) {
          const incomingFloatArray = new Float32Array(event.data);
          let hasNonZero = incomingFloatArray.some(val => val !== 0);
          // logger.info('OFFSCREEN: Tab Worklet sent ArrayBuffer', { byteLength: event.data.byteLength, hasNonZeroData: hasNonZero });
          extApi.runtime.sendMessage({
              type: 'audio-data',
              source: 'tab', // Differentiate source
              target: 'background',
              data: Array.from(incomingFloatArray),
              originalType: 'Float32Array'
          });
        } else if (event.data instanceof ArrayBuffer) { /* logger.warn('OFFSCREEN: Tab Worklet sent an EMPTY ArrayBuffer.'); */ }
      };
      tabAudioProcessorNode.port.onmessageerror = (error) => logger.error('OFFSCREEN: Error in port message from Tab worklet', error);
      logger.info('OFFSCREEN: TAB audio processing pipeline established.');
    }
  } catch (error: any) {
    logger.error('OFFSCREEN: Error in Tab Capture setup:', error.message, { stack: error.stack });
    extApi.runtime.sendMessage({ type: 'capture-error', source: 'tab', error: error.message, target: 'background' });
  }

  // --- USER MICROPHONE CAPTURE SETUP ---
  try {
    logger.info('OFFSCREEN: Attempting to start USER microphone capture...');
    userMediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

    if (!userMediaStream) {
      logger.error('OFFSCREEN: User Mic getUserMedia failed to return a stream.');
      extApi.runtime.sendMessage({ type: 'capture-error', source: 'user-mic', target:'background', error: 'User Mic getUserMedia failed' });
      return; // If user mic fails, maybe we still want tab capture to continue? Or stop all? For now, just return from this block.
    }
    logger.info('OFFSCREEN: User microphone capture started successfully.');
    if (userMediaStream.getAudioTracks().length > 0) {
      const audioTrack = userMediaStream.getAudioTracks()[0];
      logger.info('OFFSCREEN: User Mic AudioTrack details:', { id: audioTrack.id, enabled: audioTrack.enabled, muted: audioTrack.muted, readyState: audioTrack.readyState, kind: audioTrack.kind, label: audioTrack.label });
       logger.info('OFFSCREEN: User Mic AudioTrack settings:', audioTrack.getSettings());
    } else {
      logger.warn('OFFSCREEN: No audio tracks found on the userMediaStream.');
      // This shouldn't happen if getUserMedia succeeded for audio:true
    }

    userAudioContext = new AudioContext();
    logger.info('OFFSCREEN: User Mic AudioContext created. State:', { state: userAudioContext.state });
    userMediaStreamSource = userAudioContext.createMediaStreamSource(userMediaStream);
    logger.info('OFFSCREEN: User Mic MediaStreamSource created.');
    // Not connecting to destination for user mic, as we don't want to play it back in the offscreen doc.
    // userMediaStreamSource.connect(userAudioContext.destination); 

    await userAudioContext.audioWorklet.addModule(workletFinalPath);
    logger.info('OFFSCREEN: User Mic AudioWorklet module added.');
    userAudioProcessorNode = new AudioWorkletNode(userAudioContext, 'audio-processor');
    logger.info('OFFSCREEN: User Mic AudioWorkletNode created.');
    userMediaStreamSource.connect(userAudioProcessorNode);
    logger.info('OFFSCREEN: User Mic MediaStreamSource connected to User Mic AudioProcessorNode.');

    userAudioProcessorNode.port.onmessage = (event) => {
      if (event.data instanceof ArrayBuffer && event.data.byteLength > 0) {
        const incomingFloatArray = new Float32Array(event.data);
        let hasNonZero = incomingFloatArray.some(val => val !== 0);
        // logger.info('OFFSCREEN: User Mic Worklet sent ArrayBuffer', { byteLength: event.data.byteLength, hasNonZeroData: hasNonZero });
        extApi.runtime.sendMessage({
            type: 'audio-data',
            source: 'user-mic', // Differentiate source
            target: 'background',
            data: Array.from(incomingFloatArray),
            originalType: 'Float32Array'
        });
      } else if (event.data instanceof ArrayBuffer) { /* logger.warn('OFFSCREEN: User Mic Worklet sent an EMPTY ArrayBuffer.'); */ }
    };
    userAudioProcessorNode.port.onmessageerror = (error) => logger.error('OFFSCREEN: Error in port message from User Mic worklet', error);
    logger.info('OFFSCREEN: USER MIC audio processing pipeline established.');

  } catch (error: any) {
    logger.error('OFFSCREEN: Error in User Microphone Capture setup:', error.message, { stack: error.stack });
    extApi.runtime.sendMessage({ type: 'capture-error', source: 'user-mic', error: error.message, target: 'background' });
  }

  // If at least one stream started, notify background.
  if (tabMediaStream || userMediaStream) {
    extApi.runtime.sendMessage({ type: 'capture-started', target: 'background' });
  } else {
    logger.error('OFFSCREEN: NEITHER Tab nor User Mic capture could be started.');
    // No 'capture-started' message if both failed. Background will only have 'capture-error' messages.
  }
}

function stopCapture() {
  logger.info('OFFSCREEN: Stopping all captures.');

  // Stop Tab Capture
  if (tabAudioProcessorNode) {
    tabAudioProcessorNode.port.close();
    tabAudioProcessorNode.disconnect();
    tabAudioProcessorNode = null;
  }
  if (tabMediaStreamSource) {
    tabMediaStreamSource.disconnect();
    tabMediaStreamSource = null;
  }
  if (tabAudioContext) {
    tabAudioContext.close().catch(e => logger.warn("Error closing tabAudioContext", e));;
    tabAudioContext = null;
  }
  if (dummyAudioElement) {
    logger.info('OFFSCREEN: Cleaning up dummy audio element for tab capture.');
    dummyAudioElement.pause();
    dummyAudioElement.srcObject = null; 
    dummyAudioElement = null;
  }
  if (tabMediaStream) {
    tabMediaStream.getTracks().forEach(track => track.stop());
    tabMediaStream = null;
  }
  logger.info('OFFSCREEN: Tab capture stopped and resources released.');

  // Stop User Microphone Capture
  if (userAudioProcessorNode) {
    userAudioProcessorNode.port.close();
    userAudioProcessorNode.disconnect();
    userAudioProcessorNode = null;
  }
  if (userMediaStreamSource) {
    userMediaStreamSource.disconnect();
    userMediaStreamSource = null;
  }
  if (userAudioContext) {
    userAudioContext.close().catch(e => logger.warn("Error closing userAudioContext", e));
    userAudioContext = null;
  }
  if (userMediaStream) {
    userMediaStream.getTracks().forEach(track => track.stop());
    userMediaStream = null;
  }
  logger.info('OFFSCREEN: User microphone capture stopped and resources released.');

  extApi.runtime.sendMessage({ type: 'capture-stopped', target: 'background' });
}

// Keep alive logic for offscreen document (optional, might be needed if it becomes inactive)
// let keepAliveInterval: NodeJS.Timeout;
// function startKeepAlive() {
//   keepAliveInterval = setInterval(() => {
//     if (extApi.runtime.getPlatformInfo) { // Check if API exists
//         extApi.runtime.getPlatformInfo((info) => {}); // Simple API call
//         logger.debug('OFFSCREEN: Keep-alive ping.');
//     } else {
//         logger.warn('OFFSCREEN: getPlatformInfo API not available for keep-alive.');
//         clearInterval(keepAliveInterval); // Stop if API is not there
//     }
//   }, 20 * 1000); // Every 20 seconds
// }
// function stopKeepAlive() {
//   clearInterval(keepAliveInterval);
// }
// startKeepAlive(); // Start keep-alive when offscreen document loads 