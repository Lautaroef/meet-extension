'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import logger from '@/lib/logger'; // Using the @/* alias

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    logger.error('ErrorBoundary caught an error', error, {
      componentStack: errorInfo.componentStack,
    });
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="p-4 text-center">
          <h2>Oops! Something went wrong.</h2>
          <p>{this.props.fallbackMessage || 'Please try refreshing the page or contact support if the issue persists.'}</p>
          {process.env.NODE_ENV !== 'production' && this.state.error && (
            <details className="mt-4 text-left p-2 bg-red-100 border border-red-300 rounded">
              <summary className="cursor-pointer font-semibold">Error Details (Dev Mode)</summary>
              <pre className="mt-2 text-sm whitespace-pre-wrap">
                {this.state.error.toString()}
                {this.state.error.stack && `\n\nStack Trace:\n${this.state.error.stack}`}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 