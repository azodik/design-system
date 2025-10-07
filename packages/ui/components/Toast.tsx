import React, { useEffect } from "react";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "success" | "warning" | "error" | "info";
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  autoClose?: number;
  position?: "top-center" | "top-right" | "bottom-right";
}

export function Toast({
  children,
  variant = "info",
  title,
  icon,
  onClose,
  autoClose,
  position = "top-right",
  className = "",
  ...props
}: ToastProps) {
  const [isClosing, setIsClosing] = React.useState(false);

  useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose?.();
    }, 300); // Match animation duration
  };

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
    <div className={`toast toast-${variant} toast-${position} ${isClosing ? 'closing' : 'show'} ${className}`} {...props}>
      <div className="toast-icon">{getIcon()}</div>
      <div className="toast-content">
        {title && <div className="toast-title">{title}</div>}
        <div className="toast-message">{children}</div>
      </div>
      {onClose && (
        <button type="button" className="toast-close" onClick={handleClose} aria-label="Close toast">
          ×
        </button>
      )}
    </div>
  );
}
