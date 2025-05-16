// live-meeting-assistant/live-meeting-assistant/extension/src/utils/logger.ts

const getTimestamp = (): string => new Date().toISOString();

interface LogContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allow any additional context
}

const formatMessage = (level: string, message: string, context?: LogContext): string => {
  let logEntry = `${getTimestamp()} [${level.toUpperCase()}] EXT: ${message}`; // Added "EXT:" prefix for clarity
  if (context && Object.keys(context).length > 0) {
    try {
      logEntry += ` | Context: ${JSON.stringify(context)}`;
    } catch (_e) {
      void _e;
      logEntry += ` | Context: (Unserializable)`;
    }
  }
  return logEntry;
};

const logger = {
  debug: (message: string, context?: LogContext): void => {
    // In extensions, NODE_ENV might be set by the bundler (WXT)
    // Alternatively, use a flag in chrome.storage.local for runtime toggling
    if (process.env.NODE_ENV !== 'production') { // Simplified debug check for extension
      console.debug(formatMessage('debug', message, context));
    }
  },
  info: (message: string, context?: LogContext): void => {
    console.info(formatMessage('info', message, context));
  },
  warn: (message: string, context?: LogContext): void => {
    console.warn(formatMessage('warn', message, context));
  },
  error: (message: string, error?: Error | unknown, context?: LogContext): void => {
    let errContext = { ...context };
    if (error instanceof Error) {
      errContext = {
        ...errContext,
        errorMessage: error.message,
        stack: error.stack,
        errorName: error.name,
      };
    } else if (typeof error === 'string') {
      errContext = { ...errContext, errorMessage: error };
    } else if (error) {
       try {
        errContext = { ...errContext, errorDetail: JSON.stringify(error) };
      } catch (_e) {
        void _e;
        errContext = { ...errContext, errorDetail: '(Unserializable error object)' };
      }
    }
    console.error(formatMessage('error', message, errContext));
  },
};

export default logger; 