"use client";
import React, { useState, useCallback } from "react";
import { Popover } from "./Popover";

export interface MenuItem {
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
  submenu?: MenuItem[];
  /**
   * Item shortcut
   */
  shortcut?: string;
}

export interface MenuProps {
  /**
   * Menu items
   */
  items: MenuItem[];
  /**
   * Trigger element
   */
  trigger: React.ReactNode;
  /**
   * Menu is open (controlled)
   */
  open?: boolean;
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Menu position
   */
  position?: "top" | "bottom" | "left" | "right";
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
}

/**
 * Enhanced Menu/Dropdown component
 *
 * @example
 * ```tsx
 * <Menu
 *   trigger={<Button>Open Menu</Button>}
 *   items={[
 *     { label: "Edit", icon: <EditIcon />, onClick: handleEdit },
 *     { label: "Delete", icon: <DeleteIcon />, onClick: handleDelete, destructive: true },
 *   ]}
 * />
 * ```
 */
export function Menu({
  items,
  trigger,
  open: controlledOpen,
  onOpenChange,
  position = "bottom",
  size = "medium",
}: MenuProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleClose = useCallback(() => {
    if (controlledOpen === undefined) {
      setInternalOpen(false);
    }
    onOpenChange?.(false);
  }, [controlledOpen, onOpenChange]);

  const handleOpen = useCallback(() => {
    if (controlledOpen === undefined) {
      setInternalOpen(true);
    }
    onOpenChange?.(true);
  }, [controlledOpen, onOpenChange]);

  const renderMenuItem = (item: MenuItem, index: number) => {
    if (item.separator) {
      return <div key={index} className="menu-separator" />;
    }

    const itemClasses = [
      "menu-item",
      `menu-item-size-${size}`,
      item.disabled && "menu-item-disabled",
      item.destructive && "menu-item-destructive",
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
        {item.icon && <span className="menu-item-icon">{item.icon}</span>}
        <span className="menu-item-label">{item.label}</span>
        {item.shortcut && <span className="menu-item-shortcut">{item.shortcut}</span>}
        {item.submenu && <span className="menu-item-arrow">›</span>}
      </button>
    );
  };

  const menuContent = (
    <div className="menu">{items.map((item, index) => renderMenuItem(item, index))}</div>
  );

  return (
    <Popover isOpen={open} onClose={handleClose} content={menuContent} position={position}>
      <div
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
        role="button"
        tabIndex={0}
      >
        {trigger}
      </div>
    </Popover>
  );
}

export default Menu;
