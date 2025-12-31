"use client";
import React, { useState } from "react";

export interface TabBarItem {
  /**
   * Unique identifier for the tab
   */
  id: string;
  /**
   * Label text
   */
  label: string;
  /**
   * Icon to display
   */
  icon?: React.ReactNode;
  /**
   * Badge count (optional)
   */
  badge?: number | string;
  /**
   * Disabled state
   */
  disabled?: boolean;
}

export interface TabBarProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange" | "role"
> {
  /**
   * Tab items
   */
  items: TabBarItem[];
  /**
   * Active tab ID
   */
  value?: string;
  /**
   * Default active tab ID (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Callback when tab changes
   */
  onChange?: (id: string) => void;
  /**
   * Show labels (default: true on desktop, false on mobile)
   */
  showLabels?: boolean;
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
}

/**
 * Tab Bar component for bottom navigation (mobile-first)
 *
 * @example
 * ```tsx
 * <TabBar
 *   items={[
 *     { id: "home", label: "Home", icon: <HomeIcon /> },
 *     { id: "search", label: "Search", icon: <SearchIcon /> },
 *     { id: "profile", label: "Profile", icon: <ProfileIcon /> },
 *   ]}
 *   value={activeTab}
 *   onChange={setActiveTab}
 * />
 * ```
 */
export function TabBar({
  items,
  value: controlledValue,
  defaultValue,
  onChange,
  showLabels = true,
  size = "medium",
  className = "",
  ...props
}: TabBarProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || items[0]?.id || "");
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (id: string) => {
    if (controlledValue === undefined) {
      setInternalValue(id);
    }
    onChange?.(id);
  };

  const tabBarClasses = [
    "tab-bar",
    `tab-bar-size-${size}`,
    !showLabels && "tab-bar-icons-only",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={tabBarClasses} role="tablist" {...props}>
      {items.map((item) => {
        const isActive = value === item.id;
        const itemClasses = [
          "tab-bar-item",
          isActive && "tab-bar-item-active",
          item.disabled && "tab-bar-item-disabled",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={item.label}
            className={itemClasses}
            onClick={() => !item.disabled && handleChange(item.id)}
            disabled={item.disabled}
          >
            <span className="tab-bar-icon">{item.icon}</span>
            {showLabels && <span className="tab-bar-label">{item.label}</span>}
            {item.badge !== undefined && item.badge !== null && (
              <span className="tab-bar-badge">{item.badge}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default TabBar;
