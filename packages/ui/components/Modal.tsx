import React, { useEffect } from "react";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "1" | "2" | "3" | "4";
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
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
  size = "2",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = "",
  ...props
}: ModalProps) {
  // Lock body scroll when modal is open
  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, closeOnEscape]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalClasses = ["az-Modal modal", `az-r-size-${size}`, className].filter(Boolean).join(" ");

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
      <div className={modalClasses} {...props}>
        {title && !hasModalHeader && (
          <ModalHeader onClose={onClose} showCloseButton={showCloseButton}>
            <h2 className="modal-title">{title}</h2>
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
