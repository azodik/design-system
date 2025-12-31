import React, { useState, useRef, useEffect, useCallback } from "react";
import { Popover } from "./Popover";

export interface ContextMenuItem {
  /**
   * Item label
   */
  label: string;
  /**
   * Item icon
   */
  icon?: React.ReactNode;
  /**
   * Item action
   */
  onClick?: () => void;
  /**
   * Item is disabled
   */
  disabled?: boolean;
  /**
   * Item is destructive
   */
  destructive?: boolean;
  /**
   * Separator after this item
   */
  separator?: boolean;
  /**
   * Submenu items
   */
  submenu?: ContextMenuItem[];
}

export interface ContextMenuProps {
  /**
   * Menu items
   */
  items: ContextMenuItem[];
  /**
   * Menu is open
   */
  open?: boolean;
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Trigger element (if not provided, uses right-click on children)
   */
  trigger?: React.ReactNode;
  /**
   * Children (for right-click trigger)
   */
  children?: React.ReactNode;
  /**
   * Position offset
   */
  offset?: { x: number; y: number };
}

/**
 * Context Menu component for right-click menus
 *
 * @example
 * ```tsx
 * <ContextMenu
 *   items={[
 *     { label: "Copy", onClick: handleCopy },
 *     { label: "Paste", onClick: handlePaste },
 *     { separator: true },
 *     { label: "Delete", onClick: handleDelete, destructive: true },
 *   ]}
 * >
 *   <div>Right-click me</div>
 * </ContextMenu>
 * ```
 */
export function ContextMenu({
  items,
  open: controlledOpen,
  onOpenChange,
  trigger,
  children,
  offset = { x: 0, y: 0 },
}: ContextMenuProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const x = e.clientX + offset.x;
      const y = e.clientY + offset.y;

      setPosition({ x, y });
      if (controlledOpen === undefined) {
        setInternalOpen(true);
      }
      onOpenChange?.(true);
    },
    [offset, controlledOpen, onOpenChange],
  );

  const handleClose = useCallback(() => {
    if (controlledOpen === undefined) {
      setInternalOpen(false);
    }
    onOpenChange?.(false);
  }, [controlledOpen, onOpenChange]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, handleClose]);

  const renderMenuItem = (item: ContextMenuItem, index: number) => {
    if (item.separator) {
      return <div key={index} className="context-menu-separator" />;
    }

    const itemClasses = [
      "context-menu-item",
      item.disabled && "context-menu-item-disabled",
      item.destructive && "context-menu-item-destructive",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        key={index}
        type="button"
        className={itemClasses}
        onClick={() => {
          if (!item.disabled) {
            item.onClick?.();
            handleClose();
          }
        }}
        disabled={item.disabled}
      >
        {item.icon && <span className="context-menu-item-icon">{item.icon}</span>}
        <span className="context-menu-item-label">{item.label}</span>
        {item.submenu && <span className="context-menu-item-arrow">›</span>}
      </button>
    );
  };

  const menuContent = (
    <div
      ref={containerRef}
      className="context-menu"
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {items.map((item, index) => renderMenuItem(item, index))}
    </div>
  );

  if (trigger) {
    return (
      <Popover isOpen={open} onClose={handleClose} content={menuContent}>
        {trigger}
      </Popover>
    );
  }

  return (
    <>
      <div
        onContextMenu={handleContextMenu}
        role="button"
        tabIndex={0}
        aria-label="Context menu trigger"
        onKeyDown={(e) => {
          if (e.key === "ContextMenu" || (e.key === "F10" && e.shiftKey)) {
            e.preventDefault();
            handleContextMenu(e as unknown as React.MouseEvent);
          }
        }}
      >
        {children}
      </div>
      {open && menuContent}
    </>
  );
}

export default ContextMenu;
