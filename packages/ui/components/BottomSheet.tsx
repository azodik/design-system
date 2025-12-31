import React, { useState, useRef, useEffect, useCallback } from "react";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

export interface BottomSheetProps {
  /**
   * Whether the bottom sheet is open
   */
  open: boolean;
  /**
   * Callback when open state changes
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Sheet content
   */
  children: React.ReactNode;
  /**
   * Title of the sheet
   */
  title?: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * Show close button
   */
  showClose?: boolean;
  /**
   * Close on overlay click
   */
  closeOnOverlayClick?: boolean;
  /**
   * Maximum height (default: 90vh)
   */
  maxHeight?: string;
  /**
   * Custom className
   */
  className?: string;
}

/**
 * BottomSheet - Mobile-friendly slide-up sheet component
 *
 * @example
 * ```tsx
 * <BottomSheet
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Settings"
 * >
 *   <div>Content here</div>
 * </BottomSheet>
 * ```
 */
export function BottomSheet({
  open,
  onOpenChange,
  children,
  title,
  description,
  showClose = true,
  closeOnOverlayClick = true,
  maxHeight = "90vh",
  className = "",
}: BottomSheetProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef<number>(0);
  const currentYRef = useRef<number>(0);
  const isDraggingRef = useRef(false);

  useBodyScrollLock(open);

  useEffect(() => {
    if (open) {
      // Use setTimeout to defer state update outside of effect
      setTimeout(() => {
        setShouldRender(true);
        setIsClosing(false);
        // Trigger animation after render
        requestAnimationFrame(() => {
          sheetRef.current?.classList.add("bottom-sheet-open");
        });
      }, 0);
    } else if (shouldRender) {
      // Use setTimeout to defer state update outside of effect
      setTimeout(() => {
        setIsClosing(true);
        sheetRef.current?.classList.remove("bottom-sheet-open");
        setTimeout(() => {
          setShouldRender(false);
          setIsClosing(false);
        }, 300);
      }, 0);
    }
  }, [open, shouldRender]);

  const handleClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        handleClose();
      }
    },
    [closeOnOverlayClick, handleClose],
  );

  // Touch handlers for swipe to close
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY;
    isDraggingRef.current = true;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    currentYRef.current = e.touches[0].clientY;
    const deltaY = currentYRef.current - startYRef.current;

    // Only allow downward swipe
    if (deltaY > 0 && sheetRef.current) {
      sheetRef.current.style.transform = `translateY(${deltaY}px)`;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const deltaY = currentYRef.current - startYRef.current;
    const threshold = 100; // Minimum swipe distance to close

    if (deltaY > threshold && sheetRef.current) {
      sheetRef.current.style.transform = "";
      handleClose();
    } else if (sheetRef.current) {
      // Snap back
      sheetRef.current.style.transform = "";
    }
  }, [handleClose]);

  // Handle escape key
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, handleClose]);

  if (!shouldRender) return null;

  return (
    <button
      type="button"
      className={`bottom-sheet-overlay ${isClosing ? "closing" : ""}`}
      onClick={handleOverlayClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleOverlayClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
        }
      }}
      aria-label="Close bottom sheet"
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        border: "none",
        padding: 0,
        cursor: "pointer",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <div
        ref={sheetRef}
        className={`bottom-sheet ${className}`}
        style={{ maxHeight }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Handle bar */}
        <div className="bottom-sheet-handle" />

        {/* Header */}
        {(title || description || showClose) && (
          <div className="bottom-sheet-header">
            <div className="bottom-sheet-header-content">
              {title && (
                <h2 id="bottom-sheet-title" className="bottom-sheet-title">
                  {title}
                </h2>
              )}
              {description && <p className="bottom-sheet-description">{description}</p>}
            </div>
            {showClose && (
              <button className="bottom-sheet-close" onClick={handleClose} aria-label="Close">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="bottom-sheet-content">{children}</div>
      </div>
    </button>
  );
}

export default BottomSheet;
