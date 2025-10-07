import React, { useEffect } from "react";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "success" | "warning" | "error" | "info";
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  autoClose?: number;
}

export function Toast({
  children,
  variant = "info",
  title,
  icon,
  onClose,
  autoClose,
  className = "",
  ...props
}: ToastProps) {
  useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(onClose, autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  const getIcon = () => {
    if (icon) return icon;

    switch (variant) {
      case "success":
        return "✓";
      case "warning":
        return "⚠";
      case "error":
        return "✕";
      case "info":
      default:
        return "ℹ";
    }
  };

  return (
    <div className={`toast toast-${variant} show ${className}`} {...props}>
      <div className="toast-icon">{getIcon()}</div>
      <div className="toast-content">
        {title && <div className="toast-title">{title}</div>}
        <div className="toast-message">{children}</div>
      </div>
      {onClose && (
        <button type="button" className="toast-close" onClick={onClose} aria-label="Close toast">
          ×
        </button>
      )}
    </div>
  );
}
