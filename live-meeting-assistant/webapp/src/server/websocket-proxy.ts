
import WebSocket, { WebSocketServer } from 'ws';
import http, { IncomingMessage } from 'http';
import { Socket } from 'net';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

// This would typically be an environment variable
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_REALTIME_TRANSCRIPTION_URL = 'wss://api.openai.com/v1/realtime?intent=transcription';
const OPENAI_SESSION_CREATION_URL = 'https://api.openai.com/v1/realtime/transcription_sessions';

// Create logs directory if it doesn't exist
const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Create a log file with timestamp
const logFile = path.join(logsDir, `websocket-proxy-${new Date().toISOString().replace(/:/g, '-')}.log`);
const logStream = fs.createWriteStream(logFile, { flags: 'a' });

// Custom logger that writes to both console and file
function logToFileAndConsole(level: string, message: string, data?: any) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level}] ${message}${data ? ' ' + JSON.stringify(data) : ''}`;
  
  // Write to file
  logStream.write(logEntry + '\n');
  
  // Also log to console
  if (level === 'ERROR') {
    console.error(logEntry);
  } else {
    console.log(logEntry);
  }
}

interface ClientConfig {
  language?: string;
  model?: string;
  // Add other relevant OpenAI params client might send
}

// Function to get an ephemeral token (logic from Subtask 19.2)
async function getOpenAIEphemeralToken(clientConfig?: ClientConfig): Promise<string | null> {
  if (!OPENAI_API_KEY) {
    logToFileAndConsole('ERROR', '[WebSocketProxy] OpenAI API key not configured for ephemeral token generation.');
    return null;
  } else {
    logToFileAndConsole('INFO', '[WebSocketProxy] OpenAI API key found for ephemeral token generation.');
  }
  try {
    const payload = {
      input_audio_format: 'pcm16',
      input_audio_transcription: {
        model: clientConfig?.model || 'gpt-4o-transcribe',
        language: clientConfig?.language || 'en'
      },
      turn_detection: { type: "server_vad", silence_duration_ms: 1000 }
    };
    const response = await fetch(OPENAI_SESSION_CREATION_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2' // Confirm if this beta header is correct for session creation
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errorBody = await response.text();
      logToFileAndConsole('ERROR', `[WebSocketProxy] OpenAI API error creating session: ${response.status}`, errorBody);
      return null;
    }
    const data = await response.json();
    const ephemeralToken = data?.client_secret?.value;
    if (!ephemeralToken) {
      logToFileAndConsole('ERROR', '[WebSocketProxy] Ephemeral token not found in OpenAI session response.');
      return null;
    }
    logToFileAndConsole('INFO', '[WebSocketProxy] Successfully obtained OpenAI ephemeral token.');
    return ephemeralToken;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error during ephemeral token generation';
    logToFileAndConsole('ERROR', '[WebSocketProxy] Error fetching OpenAI ephemeral token:', { errorMessage, originalError: error });
    return null;
  }
}

export function setupWebSocketProxy(server: http.Server) {
  const wss = new WebSocketServer({ noServer: true }); // We'll attach to existing HTTP server

  logToFileAndConsole('INFO', '[WebSocketProxy] Setting up WebSocket proxy...');
  logToFileAndConsole('INFO', `[WebSocketProxy] Logs will be saved to: ${logFile}`);

  server.on('upgrade', (request: IncomingMessage, socket: Socket, head: Buffer) => {
    const { pathname } = new URL(request.url || '', `http://${request.headers.host}`);

    if (pathname === '/api/transcribe-socket') {
      // TODO: Implement authentication for this WebSocket connection (Subtask 19.5)
      // For now, allow all connections to this path for development
      logToFileAndConsole('INFO', '[WebSocketProxy] Attempting to upgrade to WebSocket for /api/transcribe-socket');
      wss.handleUpgrade(request, socket, head, (clientWs: WebSocket) => {
        wss.emit('connection', clientWs, request);
      });
    } else {
      // For other paths, let Next.js handle it or close the socket
      socket.destroy();
    }
  });

  wss.on('connection', (clientWs: WebSocket, _request: IncomingMessage) => {
    logToFileAndConsole('INFO', '[WebSocketProxy] Client connected to backend WebSocket proxy.');
    let openaiWs: WebSocket | null = null;
    let isInitialized = false;

    clientWs.on('message', async (message: WebSocket.RawData) => {
      const messageStr = message.toString();
      const parsedMessage = tryParseJson(messageStr);
      
      // Log the message type but not the full data for audio chunks to avoid huge logs
      if (parsedMessage && parsedMessage.type === 'audio_chunk') {
        logToFileAndConsole('INFO', '[WebSocketProxy] Received audio_chunk from client', { 
          type: parsedMessage.type, 
          dataLength: parsedMessage.data ? parsedMessage.data.length : 0 
        });
      } else {
        logToFileAndConsole('INFO', '[WebSocketProxy] Received message from client:', messageStr);
      }
      
      if (!parsedMessage) {
        logToFileAndConsole('ERROR', '[WebSocketProxy] Failed to parse client message as JSON:', messageStr);
        clientWs.send(JSON.stringify({ type: 'error', error: 'Invalid JSON message' }));
        return;
      }

      if (parsedMessage.type === 'init_transcription' && parsedMessage.config) {
        if (isInitialized) {
          logToFileAndConsole('WARN', '[WebSocketProxy] Transcription already initialized for this client.');
          clientWs.send(JSON.stringify({ type: 'error', error: 'Transcription already initialized'}));
          return;
        }
        logToFileAndConsole('INFO', '[WebSocketProxy] Received init_transcription from client with config:', parsedMessage.config);
        
        const ephemeralToken = await getOpenAIEphemeralToken(parsedMessage.config as ClientConfig);
        if (!ephemeralToken) {
          clientWs.send(JSON.stringify({ type: 'error', error: 'Failed to obtain OpenAI session token' }));
          clientWs.close();
          return;
        }

        logToFileAndConsole('INFO', '[WebSocketProxy] Connecting to OpenAI Realtime API...');
        openaiWs = new WebSocket(OPENAI_REALTIME_TRANSCRIPTION_URL, {
          headers: {
            'Authorization': `Bearer ${ephemeralToken}`,
            'OpenAI-Beta': 'realtime=v1' // Beta header for the WebSocket connection itself
          }
        });

        openaiWs.on('open', () => {
          logToFileAndConsole('INFO', '[WebSocketProxy] Connection to OpenAI WebSocket established.');
          isInitialized = true;
          clientWs.send(JSON.stringify({ type: 'proxy_connected', message: 'Successfully connected to OpenAI STT service via proxy.'}));
          
          // Send transcription_session.update to OpenAI
          const openAIConfig = {
            type: "transcription_session.update",
            session: { 
              input_audio_transcription: {
                model: parsedMessage.config.model || 'gpt-4o-transcribe',
                language: parsedMessage.config.language || 'en',
                // prompt: parsedMessage.config.prompt || "Transcribe the audio accurately."
              },
              turn_detection: parsedMessage.config.turn_detection || { type: "server_vad", silence_duration_ms: 1000 },
              // input_audio_format: 'pcm16' // This is usually part of session creation REST API
            }
          };
          openaiWs?.send(JSON.stringify(openAIConfig));
          logToFileAndConsole('INFO', '[WebSocketProxy] Sent transcription_session.update to OpenAI.');
        });

        openaiWs.on('message', (data: WebSocket.RawData) => {
          const dataStr = data.toString();
          logToFileAndConsole('INFO', '[WebSocketProxy] Received message from OpenAI:', dataStr);
          clientWs.send(dataStr); // Proxy to client
        });

        openaiWs.on('error', (error: Error) => {
          logToFileAndConsole('ERROR', '[WebSocketProxy] OpenAI WebSocket error:', error);
          clientWs.send(JSON.stringify({ type: 'error', error: 'OpenAI WebSocket error', details: error.message }));
        });

        openaiWs.on('close', (code: number, reason: Buffer) => {
          logToFileAndConsole('INFO', '[WebSocketProxy] OpenAI WebSocket closed:', { code, reason: reason.toString() });
          isInitialized = false;
          openaiWs = null;
          clientWs.send(JSON.stringify({ type: 'proxy_disconnected', reason: `OpenAI connection closed: ${reason.toString()}`}));
          // clientWs.close(); // Optionally close client connection if OpenAI connection drops
        });

      } else if (parsedMessage.type === 'audio_chunk' && parsedMessage.data) {
        if (openaiWs && openaiWs.readyState === WebSocket.OPEN && isInitialized) {
          try {
            // Assuming OpenAI expects base64 encoded audio data in this specific message format
            const audioMessageToOpenAI = {
              type: "input_audio_buffer.append",
              audio: parsedMessage.data // Client already sends base64 string as per Subtask 20.3
            };
            openaiWs.send(JSON.stringify(audioMessageToOpenAI));
            // Don't log every audio chunk to avoid log bloat
          } catch (sendError: unknown) {
            const errorMessage = sendError instanceof Error ? sendError.message : 'Unknown error sending audio to OpenAI';
            logToFileAndConsole('ERROR', '[WebSocketProxy] Error sending audio data to OpenAI:', { errorMessage, originalError: sendError });
          }
        } else {
          logToFileAndConsole('WARN', '[WebSocketProxy] OpenAI WebSocket not ready or not initialized. Audio chunk not sent.');
          // TODO: Buffer audio if needed
        }
      } else {
        logToFileAndConsole('WARN', '[WebSocketProxy] Unhandled message type from client:', parsedMessage.type);
        clientWs.send(JSON.stringify({ type: 'error', error: `Unhandled message type: ${parsedMessage.type}` }));
      }
    });

    clientWs.on('close', () => {
      logToFileAndConsole('INFO', '[WebSocketProxy] Client disconnected.');
      if (openaiWs) {
        openaiWs.close();
        openaiWs = null;
      }
      isInitialized = false;
    });

    clientWs.on('error', (error: Error) => {
      logToFileAndConsole('ERROR', '[WebSocketProxy] Client WebSocket error:', error);
      if (openaiWs) {
        openaiWs.close();
        openaiWs = null;
      }
      isInitialized = false;
    });
  });

  logToFileAndConsole('INFO', '[WebSocketProxy] WebSocket proxy setup complete and listening for upgrades on /api/transcribe-socket');
}

// Helper function to safely parse JSON
function tryParseJson(str: string) {
  try {
    return JSON.parse(str);
  } catch (_e: unknown) {
    return null;
  }
}

// This function needs to be called when the Next.js HTTP server is created.
// For Next.js 13+ App Router, integrating a custom WebSocket server typically involves
// modifying the custom server setup (e.g., if you have a server.js/index.js at the root of your webapp)
// or running a separate WebSocket server process if a simple integration isn't feasible.
// If using Pages Router, it could be attached in `pages/api/socket.ts` by not having a default export and handling the req/res directly. 