import http from 'http';
import { setupWebSocketProxy } from './websocket-proxy';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const port = parseInt(process.env.WEBSOCKET_PORT || '3001', 10);

const server = http.createServer((req, res) => {
  // This basic HTTP server only handles WebSocket upgrades for our path.
  // It will respond with 404 to other requests if not handled by setupWebSocketProxy's upgrade logic.
  if (req.url !== '/api/transcribe-socket') { 
    res.writeHead(404);
    res.end('Not Found. This server is for WebSocket connections only on /api/transcribe-socket.');
  }
});

setupWebSocketProxy(server);

server.listen(port, () => {
  console.log(`[WebSocketProxyServer] HTTP server listening on port ${port} for WebSocket upgrades at /api/transcribe-socket`);
});

process.on('SIGINT', () => {
  console.log('[WebSocketProxyServer] Shutting down...');
  server.close();
  process.exit(0);
}); 