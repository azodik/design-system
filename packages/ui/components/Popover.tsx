import React, { useEffect } from "react";

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
