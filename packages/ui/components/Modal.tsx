import React, { useEffect } from "react";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = "",
  ...props
}: ModalProps) {
  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, closeOnEscape]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalClasses = ["modal", size !== "md" && `modal-${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={handleOverlayClick}>
      <div className={modalClasses} {...props}>
        {title && (
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            {showCloseButton && (
              <button
                type="button"
                className="modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

// Modal Footer Component
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ModalFooter({ children, className = "", ...props }: ModalFooterProps) {
  return (
    <div className={`modal-footer ${className}`} {...props}>
      {children}
    </div>
  );
}

// Toast Component
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

// Tooltip Component
export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({
  children,
  content,
  position = "top",
  className = "",
  ...props
}: TooltipProps) {
  return (
    <div className={`tooltip ${className}`} {...props}>
      {children}
      <div className={`tooltip-content tooltip-${position}`}>{content}</div>
    </div>
  );
}

// Popover Component
export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  children: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function Popover({
  children,
  content,
  isOpen,
  onClose,
  title,
  className = "",
  ...props
}: PopoverProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest(".popover")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`popover ${isOpen ? "open" : ""} ${className}`} {...props}>
      {children}
      <div className="popover-content">
        {title && <div className="popover-title">{title}</div>}
        <div className="popover-text">{content}</div>
      </div>
    </div>
  );
}
