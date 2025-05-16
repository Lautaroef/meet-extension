import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  srcDir: 'src',
  manifest: {
    name: 'Live Meeting Assistant',
    description: 'Your AI companion for supercharged meetings. Provides pre-meeting intelligence and live contextual insights.',
    version: '0.1.0',
    permissions: [
      "storage",
      "activeTab",
      "scripting",
      "tabs",
      "tabCapture",
      "offscreen"
      // Add "tabCapture" later if directly capturing tab audio
    ],
    options_ui: {
      page: "entrypoints/options/index.html",
      open_in_tab: true
    },
    // Explicitly define action to prevent auto-detection of popup as default
    action: {},
    // Declare the offscreen document
    offscreen: {
      reasons: ["USER_MEDIA"], // Reason required for accessing media APIs
      justification: "Capture tab audio for processing and transcription.", // Justification for using the offscreen document
      path: "offscreen.html" // Path to the offscreen HTML file (we will create this)
    },
    // browser_specific_settings for Firefox if needed later
  },
  // Entrypoints like background, popup, and *.content.ts are auto-detected by WXT
  // from the src/entrypoints directory.
});
