import React from "react";

export interface BottomNavigationItem {
  /**
   * Item label
   */
  label: string;
  /**
   * Item icon
   */
  icon?: React.ReactNode;
  /**
   * Item value
   */
  value: string;
  /**
   * Item is active
   */
  active?: boolean;
  /**
   * Item is disabled
   */
  disabled?: boolean;
  /**
   * Badge count
   */
  badge?: number | string;
}

export interface BottomNavigationProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  /**
   * Navigation items
   */
  items: BottomNavigationItem[];
  /**
   * Active item value
   */
  value?: string;
  /**
   * Callback when item is clicked
   */
  onChange?: (value: string) => void;
  /**
   * Show labels
   */
  showLabels?: boolean;
  /**
   * Fixed to bottom
   */
  fixed?: boolean;
}

/**
 * Bottom Navigation component - Tab bar component
 *
 * @example
 * ```tsx
 * <BottomNavigation
 *   items={navItems}
 *   value={activeTab}
 *   onChange={setActiveTab}
 * />
 * ```
 */
export function BottomNavigation({
  items,
  value,
  onChange,
  showLabels = true,
  fixed = true,
  className = "",
  ...props
}: BottomNavigationProps) {
  const handleItemClick = (itemValue: string) => {
    if (onChange) {
      onChange(itemValue);
    }
  };

  const bottomNavigationClasses = [
    "bottom-navigation",
    fixed && "bottom-navigation--fixed",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={bottomNavigationClasses} {...props}>
      {items.map((item) => {
        const isActive = value !== undefined ? value === item.value : item.active;
        const itemClasses = [
          "bottom-navigation-item",
          isActive && "bottom-navigation-item--active",
          item.disabled && "bottom-navigation-item--disabled",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={item.value}
            className={itemClasses}
            onClick={() => !item.disabled && handleItemClick(item.value)}
            disabled={item.disabled}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
          >
            <div className="bottom-navigation-item-icon">
              {item.icon}
              {item.badge !== undefined && (
                <span className="bottom-navigation-item-badge">{item.badge}</span>
              )}
            </div>
            {showLabels && <span className="bottom-navigation-item-label">{item.label}</span>}
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNavigation;
