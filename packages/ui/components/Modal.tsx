import React, { useEffect } from "react";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { SemanticSize, getSizeClassName } from "../utils/size-variant-mapping";
import { useReducedMotion } from "../utils/reduced-motion";
import { useHighContrastMode } from "../utils/high-contrast";
import { announceToScreenReader } from "../utils/screen-reader";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: SemanticSize;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  highContrast?: boolean;
}

/**
 * Modal component for displaying content in an overlay
 *
 * @param isOpen - Controls modal visibility
 * @param onClose - Callback when modal should close
 * @param title - Optional modal title
 * @param children - Modal content
 * @param size - Modal size (default: "2")
 * @param showCloseButton - Show close button (default: true)
 * @param closeOnOverlayClick - Close when clicking overlay (default: true)
 * @param closeOnEscape - Close on Escape key (default: true)
 * @example
 * ```tsx
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Example">
 *   <p>Modal content</p>
 * </Modal>
 * ```
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "sm",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  highContrast: propHighContrast,
  className = "",
  ...props
}: ModalProps) {
  // Lock body scroll when modal is open
  useBodyScrollLock(isOpen);
  const reducedMotion = useReducedMotion();
  const systemHighContrast = useHighContrastMode();
  const highContrast = propHighContrast ?? systemHighContrast;
  const sizeClassName = getSizeClassName(size);
  const titleId = React.useId();

  // Announce modal to screen reader
  useEffect(() => {
    if (isOpen && title) {
      announceToScreenReader(`${title} dialog opened`);
    }
  }, [isOpen, title]);

  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        if (title) {
          announceToScreenReader(`${title} dialog closed`);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, closeOnEscape, title]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalClasses = [
    "az-Modal modal",
    sizeClassName,
    highContrast ? "az-high-contrast" : "",
    reducedMotion ? "az-reduced-motion" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Check if children contains ModalHeader to avoid duplicate headers
  const hasModalHeader = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === ModalHeader,
  );

  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={handleOverlayClick}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div
        className={modalClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${titleId}-title` : undefined}
        {...props}
      >
        {title && !hasModalHeader && (
          <ModalHeader onClose={onClose} showCloseButton={showCloseButton}>
            <h2 id={`${titleId}-title`} className="modal-title">
              {title}
            </h2>
          </ModalHeader>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

// Modal Header Component
export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showCloseButton?: boolean;
  onClose?: () => void;
}

export function ModalHeader({
  children,
  className = "",
  showCloseButton = true,
  onClose,
  ...props
}: ModalHeaderProps) {
  return (
    <div className={`modal-header ${className}`} {...props}>
      {children}
      {showCloseButton && onClose && (
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
      )}
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
