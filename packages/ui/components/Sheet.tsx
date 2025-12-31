"use client";
import React from "react";
import { Drawer, DrawerContent, DrawerHeader } from "./Drawer";

export interface SheetProps {
  /**
   * Sheet is open
   */
  open: boolean;
  /**
   * Callback when sheet should close
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Sheet content
   */
  children: React.ReactNode;
  /**
   * Sheet title
   */
  title?: string;
  /**
   * Sheet description
   */
  description?: string;
  /**
   * Sheet position (via CSS classes)
   */
  position?: "top" | "bottom" | "left" | "right";
  /**
   * Sheet size (via CSS classes)
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * Show close button
   */
  showClose?: boolean;
  /**
   * Close on overlay click
   */
  closeOnOverlayClick?: boolean;
  /**
   * Close on escape key
   */
  closeOnEscape?: boolean;
}

/**
 * Sheet component - Slide-up sheets (enhancement to Drawer)
 * A mobile-friendly alternative to modals
 *
 * @example
 * ```tsx
 * <Sheet
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Settings"
 *   position="bottom"
 * >
 *   <SheetContent>...</SheetContent>
 * </Sheet>
 * ```
 */
export function Sheet({
  open,
  onOpenChange,
  children,
  title,
  description,
  position = "bottom",
  size = "md",
  showClose = true,
  closeOnOverlayClick: _closeOnOverlayClick = true,
  closeOnEscape: _closeOnEscape = true,
}: SheetProps) {
  const sheetClasses = ["sheet", `sheet-${position}`, `sheet-${size}`].filter(Boolean).join(" ");

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className={sheetClasses} onClose={() => onOpenChange(false)}>
        {(title || description || showClose) && (
          <DrawerHeader>
            {title && <h2 className="sheet-title">{title}</h2>}
            {description && <p className="sheet-description">{description}</p>}
            {showClose && (
              <button
                type="button"
                className="sheet-close"
                onClick={() => onOpenChange(false)}
                aria-label="Close sheet"
              >
                ×
              </button>
            )}
          </DrawerHeader>
        )}
        <div className="sheet-content">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}

export default Sheet;
