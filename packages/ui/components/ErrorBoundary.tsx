import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary component for catching and handling React component errors
 *
 * @example
 * ```tsx
 * <ErrorBoundary fallback={<div>Something went wrong</div>}>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to error reporting service
    this.props.onError?.(error, errorInfo);

    // In production, you might want to send this to an error tracking service
    // Only log in development (check for __DEV__ or similar, or always log for now)
    try {
      type GlobalWithDev = typeof globalThis & { __DEV__?: boolean };
      type WindowWithDev = Window & { __DEV__?: boolean };
      const isDev =
        (globalThis as GlobalWithDev).__DEV__ ??
        (typeof window !== "undefined" && (window as WindowWithDev).__DEV__) ??
        true; // Default to true for development logging
      if (isDev) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
      }
    } catch {
      // Silently fail if environment check fails
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          style={{
            padding: "20px",
            margin: "20px",
            border: "1px solid var(--gray-6)",
            borderRadius: "var(--radius-3)",
            backgroundColor: "var(--gray-2)",
            color: "var(--gray-12)",
          }}
        >
          <h2 style={{ marginTop: 0, color: "var(--ruby-11)" }}>Something went wrong</h2>
          <p style={{ marginBottom: "10px" }}>An error occurred while rendering this component.</p>
          {this.state.error && (
            <details style={{ marginTop: "10px" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600 }}>Error Details</summary>
              <pre
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  backgroundColor: "var(--gray-3)",
                  borderRadius: "var(--radius-2)",
                  overflow: "auto",
                  fontSize: "12px",
                }}
              >
                {this.state.error.toString()}
              </pre>
            </details>
          )}
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: "15px",
              padding: "8px 16px",
              backgroundColor: "var(--accent-9)",
              color: "var(--accent-11)",
              border: "none",
              borderRadius: "var(--radius-2)",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
