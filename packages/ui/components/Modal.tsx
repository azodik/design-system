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

  // Check if children contains ModalHeader to avoid duplicate headers
  const hasModalHeader = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === ModalHeader,
  );

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={handleOverlayClick}>
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
