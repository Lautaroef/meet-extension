// live-meeting-assistant/live-meeting-assistant/extension/src/entrypoints/meetingScript.content.ts

import { defineContentScript } from '#imports';
import logger from '@/utils/logger';

export default defineContentScript({
  matches: ['*://meet.google.com/*', '*://workspace.google.com/products/meet/*', '*://*.zoom.us/wc/*', '*://*.webex.com/*', '*://*.youtube.com/watch*', 'chrome-extension://*/mic-loopback-test.html'],
  runAt: 'document_idle', 

  async main() {
    logger.info('Meeting content script (meetingScript.content.ts) executing main() on URL:', { url: window.location.href });

    // Example: Simple DOM interaction - log the page title
    logger.info('Page title from content script:', { title: document.title });

    // Try to send a message to the background script almost immediately
    try {
      logger.info('Content script attempting to send IMMEDIATE ping to background...');
      const response = await browser.runtime.sendMessage({ action: 'pingFromContentScript', url: window.location.href });
      logger.info('IMMEDIATE Response from background in content script:', { response });
    } catch (error) {
      logger.error('Error sending IMMEDIATE message from content script to background:', error);
    }

    // More complex DOM interactions and feature-specific logic will be added later.
  },
}); 