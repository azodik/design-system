import React, { Component, ErrorInfo, ReactNode } from "react";
import { EmptyState } from "./EmptyState";

export interface ErrorBoundaryProps {
  /**
   * Children to render
   */
  children: ReactNode;
  /**
   * Fallback UI component
   */
  fallback?: ReactNode;
  /**
   * Callback when error occurs
   */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /**
   * Show error details
   */
  showDetails?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary component for enhanced error UI
 *
 * @example
 * ```tsx
 * <ErrorBoundary onError={(error) => console.error(error)}>
 *   <App />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    this.props.onError?.(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary">
          <EmptyState
            title="Something went wrong"
            description={
              this.props.showDetails && this.state.error
                ? this.state.error.message
                : "An unexpected error occurred. Please try refreshing the page."
            }
            icon="⚠️"
            action={{
              label: "Reload Page",
              onClick: () => window.location.reload(),
            }}
          />
          {this.props.showDetails && this.state.error && (
            <details className="error-boundary-details">
              <summary>Error Details</summary>
              <pre className="error-boundary-stack">{this.state.error.stack}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
