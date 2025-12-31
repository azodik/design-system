import React, { useEffect, useCallback, useMemo } from "react";
import { useReducedMotion } from "../utils/reduced-motion";
import { useHighContrastMode } from "../utils/high-contrast";
import { announceToScreenReader } from "../utils/screen-reader";

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
  const reducedMotion = useReducedMotion();
  const highContrast = useHighContrastMode();

  // Announce to screen reader
  useEffect(() => {
    if (title || children) {
      const announcement = title
        ? `${title}: ${typeof children === "string" ? children : ""}`
        : typeof children === "string"
          ? children
          : "";
      if (announcement) {
        announceToScreenReader(announcement);
      }
    }
  }, [title, children]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose?.();
    }, 300); // Match animation duration
  }, [onClose]);

  useEffect(() => {
    if (autoClose && onClose && !reducedMotion) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose, handleClose, reducedMotion]);

  const getIcon = useCallback(() => {
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
  }, [icon, variant]);

  const toastClassName = useMemo(
    () =>
      `toast toast-${variant} toast-${position} ${isClosing ? "closing" : "show"} ${highContrast ? "az-high-contrast" : ""} ${reducedMotion ? "az-reduced-motion" : ""} ${className}`,
    [variant, position, isClosing, highContrast, reducedMotion, className],
  );

  return (
    <div className={toastClassName} role="alert" aria-live="polite" {...props}>
      <div className="toast-icon" aria-hidden="true">
        {getIcon()}
      </div>
      <div className="toast-content">
        {title && <div className="toast-title">{title}</div>}
        <div className="toast-message">{children}</div>
      </div>
      {onClose && (
        <button
          type="button"
          className="toast-close"
          onClick={handleClose}
          aria-label="Close toast"
        >
          ×
        </button>
      )}
    </div>
  );
}
