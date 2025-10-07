import React, { useEffect } from "react";

export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  children: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  position?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
  offset?: number;
}

export function Popover({
  children,
  content,
  isOpen,
  onClose,
  title,
  position = "bottom",
  offset = 8,
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

  const getPositionClasses = () => {
    return `popover-${position}`;
  };

  const getPositionStyles = () => {
    const styles: React.CSSProperties = {};
    
    switch (position) {
      case "top":
        styles.bottom = "100%";
        styles.left = "50%";
        styles.transform = "translateX(-50%)";
        styles.marginBottom = `${offset}px`;
        break;
      case "top-start":
        styles.bottom = "100%";
        styles.left = "0";
        styles.marginBottom = `${offset}px`;
        break;
      case "top-end":
        styles.bottom = "100%";
        styles.right = "0";
        styles.marginBottom = `${offset}px`;
        break;
      case "bottom":
        styles.top = "100%";
        styles.left = "50%";
        styles.transform = "translateX(-50%)";
        styles.marginTop = `${offset}px`;
        break;
      case "bottom-start":
        styles.top = "100%";
        styles.left = "0";
        styles.marginTop = `${offset}px`;
        break;
      case "bottom-end":
        styles.top = "100%";
        styles.right = "0";
        styles.marginTop = `${offset}px`;
        break;
      case "left":
        styles.right = "100%";
        styles.top = "50%";
        styles.transform = "translateY(-50%)";
        styles.marginRight = `${offset}px`;
        break;
      case "left-start":
        styles.right = "100%";
        styles.top = "0";
        styles.marginRight = `${offset}px`;
        break;
      case "left-end":
        styles.right = "100%";
        styles.bottom = "0";
        styles.marginRight = `${offset}px`;
        break;
      case "right":
        styles.left = "100%";
        styles.top = "50%";
        styles.transform = "translateY(-50%)";
        styles.marginLeft = `${offset}px`;
        break;
      case "right-start":
        styles.left = "100%";
        styles.top = "0";
        styles.marginLeft = `${offset}px`;
        break;
      case "right-end":
        styles.left = "100%";
        styles.bottom = "0";
        styles.marginLeft = `${offset}px`;
        break;
      default:
        styles.top = "100%";
        styles.left = "50%";
        styles.transform = "translateX(-50%)";
        styles.marginTop = `${offset}px`;
    }
    
    return styles;
  };

  return (
    <div className={`popover ${isOpen ? "open" : ""} ${getPositionClasses()} ${className}`} {...props}>
      {children}
      <div className="popover-content" style={getPositionStyles()}>
        {title && <div className="popover-title">{title}</div>}
        <div className="popover-text">{content}</div>
      </div>
    </div>
  );
}
