import React from 'react';
import ReactDOM from 'react-dom/client';
import logger from '@/utils/logger';
// import ErrorBoundary from '@/components/ErrorBoundary'; // Consider adding later if options page becomes complex

function OptionsApp() {
  logger.info('Options page loaded.');
  return (
    // <ErrorBoundary fallbackMessage="Options page encountered an error.">
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Live Meeting Assistant - Options</h1>
        <p>Settings and configurations will go here.</p>
        <p>For example: API key inputs, data source connections, feature toggles, etc.</p>
      </div>
    // </ErrorBoundary>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OptionsApp />
  </React.StrictMode>
); 