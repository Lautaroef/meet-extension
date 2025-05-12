import { defineBackground } from '#imports'; // Using #imports for WXT v0.20+
import logger from '@/utils/logger';

export default defineBackground(() => {
  logger.info('Background service worker started.');

  // Example: Listen for extension installation or update
  browser.runtime.onInstalled.addListener((details) => {
    logger.info('Extension installed or updated.', { reason: details.reason, previousVersion: details.previousVersion });
    // if (details.reason === 'install') {
      // Perform first-time setup if needed
      // Example: browser.tabs.create({ url: 'options.html' }); // If you have an options page
    // }
  });

  // Example: Basic message listener
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    logger.info('BG SCRIPT: Message received in background (onMessage listener entry):', { messageAction: message?.action, senderUrl: sender?.url });

    if (message.action === 'getBackgroundInfo') {
      sendResponse({ info: 'This is some info from the background script.', timestamp: Date.now() });
      return true; // Keep the message channel open for asynchronous response
    } else if (message.action === 'pingFromContentScript') { 
      logger.info('Background received ping from content script', { url: message.url });
      sendResponse({ ack: 'Background received ping at ' + new Date().toISOString(), originalUrl: message.url });
      return true; 
    }
    // Return false or undefined if you don't send a response synchronously or wish to close the channel
    // return false; // Or simply don't return anything for synchronous response without value.
  });

  // Add other core logic, event listeners (e.g., for alarms, storage changes) here.
});
