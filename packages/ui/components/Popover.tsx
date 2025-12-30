import React, { useEffect, useRef, useState, useLayoutEffect } from "react";

export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  children: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  position?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";
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
  const popoverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [adjustedPosition, setAdjustedPosition] = useState<React.CSSProperties>({});

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

  // Adjust position to keep content within viewport
  // Only apply constraints on mobile/small screens - desktop should show full content
  useLayoutEffect(() => {
    if (!isOpen || !popoverRef.current || !contentRef.current) {
      return;
    }

    // Use requestAnimationFrame to ensure DOM is fully rendered
    const adjustPosition = () => {
      if (!popoverRef.current || !contentRef.current) return;

      const triggerRect = popoverRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const adjustments: React.CSSProperties = {};
      const padding = 16;

      // Only apply constraints on mobile/small screens (<= 1127px width or <= 600px height)
      // Desktop should show full content without height constraints, but adjust position if needed
      const isMobile = viewportWidth <= 1127 || viewportHeight <= 600;

      // On desktop, only adjust position to keep popover visible, but don't constrain height
      if (!isMobile) {
        // Check if popover would go off-screen horizontally
        if (position.includes("end") || position.includes("right")) {
          const rightEdge = triggerRect.right;
          const contentWidth = contentRect.width || 300;
          if (rightEdge + contentWidth > viewportWidth) {
            // Shift left to keep it visible
            adjustments.right = `${Math.max(16, viewportWidth - triggerRect.right)}px`;
            adjustments.left = "auto";
          }
        }

        // Check if popover would go off-screen vertically (but don't constrain height)
        if (position.includes("bottom")) {
          const contentBottom = triggerRect.bottom + (contentRect.height || 0) + offset;
          if (contentBottom > viewportHeight) {
            // Flip to top if there's more space above
            const spaceAbove = triggerRect.top - offset;
            const spaceBelow = viewportHeight - triggerRect.bottom - offset;
            if (spaceAbove > spaceBelow) {
              adjustments.bottom = `${viewportHeight - triggerRect.top + offset}px`;
              adjustments.top = "auto";
            }
          }
        } else if (position.includes("top")) {
          const contentTop = triggerRect.top - (contentRect.height || 0) - offset;
          if (contentTop < 0) {
            const spaceAbove = triggerRect.top - offset;
            const spaceBelow = viewportHeight - triggerRect.bottom - offset;
            if (spaceBelow > spaceAbove) {
              adjustments.top = `${triggerRect.bottom + offset}px`;
              adjustments.bottom = "auto";
            }
          }
        }

        setAdjustedPosition(adjustments);
        return;
      }

      // Mobile-only constraints - ensure content stays within viewport
      // Check horizontal boundaries
      if (position.includes("end") || position.includes("right")) {
        const rightEdge = triggerRect.right;
        const contentWidth = contentRect.width || 300;
        const contentLeft = triggerRect.left;

        // Ensure content doesn't go off right edge
        if (contentLeft + contentWidth > viewportWidth - padding) {
          adjustments.maxWidth = `${viewportWidth - padding * 2}px`;
          // If trigger is near right edge, align to right with padding
          if (rightEdge > viewportWidth - padding) {
            adjustments.right = `${padding}px`;
            adjustments.left = "auto";
          } else {
            // Otherwise, ensure content doesn't overflow
            adjustments.maxWidth = `${viewportWidth - contentLeft - padding}px`;
          }
        }
      } else if (position.includes("left")) {
        const contentWidth = contentRect.width || 300;
        const contentRight = triggerRect.right;

        // Ensure content doesn't go off left edge
        if (contentRight - contentWidth < padding) {
          adjustments.maxWidth = `${viewportWidth - padding * 2}px`;
          adjustments.left = `${padding}px`;
          adjustments.right = "auto";
        }
      }

      // Check vertical boundaries - ensure content is always visible on mobile
      if (position.includes("bottom")) {
        const actualHeight = contentRect.height;
        const spaceBelow = viewportHeight - triggerRect.bottom - offset;
        const spaceAbove = triggerRect.top - offset;
        const contentBottom = triggerRect.bottom + actualHeight + offset;

        // Always ensure content is visible - be more aggressive on mobile
        if (contentBottom > viewportHeight - padding) {
          // Not enough space below
          if (spaceAbove > spaceBelow && spaceAbove > actualHeight + padding) {
            // Flip to top if there's more space above
            adjustments.bottom = `${viewportHeight - triggerRect.top + offset}px`;
            adjustments.top = "auto";
          } else {
            // Constrain height to fit in available space
            const maxAllowedHeight = Math.max(200, spaceBelow - padding);
            adjustments.maxHeight = `${maxAllowedHeight}px`;
            adjustments.overflowY = "auto";
          }
        }
      } else if (position.includes("top")) {
        const actualHeight = contentRect.height;
        const spaceAbove = triggerRect.top - offset;
        const spaceBelow = viewportHeight - triggerRect.bottom - offset;
        const contentTop = triggerRect.top - actualHeight - offset;

        // Always ensure content is visible
        if (contentTop < padding) {
          if (spaceBelow > spaceAbove && spaceBelow > actualHeight + padding) {
            // Flip to bottom if there's more space below
            adjustments.top = `${triggerRect.bottom + offset}px`;
            adjustments.bottom = "auto";
          } else {
            // Constrain height to fit in available space
            const maxAllowedHeight = Math.max(200, spaceAbove - padding);
            adjustments.maxHeight = `${maxAllowedHeight}px`;
            adjustments.overflowY = "auto";
          }
        }
      }

      setAdjustedPosition(adjustments);
    };

    // Measure after content is fully rendered
    // Use multiple RAF calls to ensure layout is complete
    let rafId: number | undefined;
    const measureAndAdjust = () => {
      rafId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          adjustPosition();
        });
      });
    };

    const timeoutId = setTimeout(measureAndAdjust, 50);
    measureAndAdjust();

    // Also adjust on window resize
    window.addEventListener("resize", adjustPosition);
    window.addEventListener("scroll", adjustPosition, true);

    return () => {
      clearTimeout(timeoutId);
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("resize", adjustPosition);
      window.removeEventListener("scroll", adjustPosition, true);
    };
  }, [isOpen, position, offset]);

  const getPositionClasses = () => {
    return `popover-${position}`;
  };

  const getPositionStyles = () => {
    const styles: React.CSSProperties = {};

    switch (position) {
      case "top":
        styles.bottom = "100%";
        styles.left = "50%";
        styles.transform = "translateX(-50%) translateY(0)";
        styles.marginBottom = `${offset}px`;
        break;
      case "top-start":
        styles.bottom = "100%";
        styles.left = "0";
        styles.transform = "translateY(0)";
        styles.marginBottom = `${offset}px`;
        break;
      case "top-end":
        styles.bottom = "100%";
        styles.right = "0";
        styles.transform = "translateY(0)";
        styles.marginBottom = `${offset}px`;
        break;
      case "bottom":
        styles.top = "100%";
        styles.left = "50%";
        styles.transform = "translateX(-50%) translateY(0)";
        styles.marginTop = `${offset}px`;
        break;
      case "bottom-start":
        styles.top = "100%";
        styles.left = "0";
        styles.transform = "translateY(0)";
        styles.marginTop = `${offset}px`;
        break;
      case "bottom-end":
        styles.top = "100%";
        styles.right = "0";
        styles.transform = "translateY(0)";
        styles.marginTop = `${offset}px`;
        break;
      case "left":
        styles.right = "100%";
        styles.top = "50%";
        styles.transform = "translateY(-50%) translateX(0)";
        styles.marginRight = `${offset}px`;
        break;
      case "left-start":
        styles.right = "100%";
        styles.top = "0";
        styles.transform = "translateX(0)";
        styles.marginRight = `${offset}px`;
        break;
      case "left-end":
        styles.right = "100%";
        styles.bottom = "0";
        styles.transform = "translateX(0)";
        styles.marginRight = `${offset}px`;
        break;
      case "right":
        styles.left = "100%";
        styles.top = "50%";
        styles.transform = "translateY(-50%) translateX(0)";
        styles.marginLeft = `${offset}px`;
        break;
      case "right-start":
        styles.left = "100%";
        styles.top = "0";
        styles.transform = "translateX(0)";
        styles.marginLeft = `${offset}px`;
        break;
      case "right-end":
        styles.left = "100%";
        styles.bottom = "0";
        styles.transform = "translateX(0)";
        styles.marginLeft = `${offset}px`;
        break;
      default:
        styles.top = "100%";
        styles.left = "50%";
        styles.transform = "translateX(-50%) translateY(0)";
        styles.marginTop = `${offset}px`;
    }

    return styles;
  };

  return (
    <div
      ref={popoverRef}
      className={`popover ${isOpen ? "open" : ""} ${getPositionClasses()} ${className}`}
      {...props}
    >
      {children}
      {isOpen && (
        <div
          ref={contentRef}
          className="popover-content"
          style={{
            ...getPositionStyles(),
            ...adjustedPosition,
            maxWidth: adjustedPosition.maxWidth || undefined,
            maxHeight: adjustedPosition.maxHeight || undefined,
            overflowY: adjustedPosition.overflowY || "auto",
            overflowX: "hidden",
          }}
        >
          {title && <div className="popover-title">{title}</div>}
          {title ? <div className="popover-text">{content}</div> : content}
        </div>
      )}
    </div>
  );
}
