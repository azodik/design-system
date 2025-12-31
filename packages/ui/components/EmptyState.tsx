import React from "react";
import Button from "./Button";
import { resolveRadiusFactor } from "../utils/radius";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title text
   */
  title?: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * Icon or illustration
   */
  icon?: React.ReactNode;
  /**
   * Action button
   */
  action?: {
    label: string;
    onClick: () => void;
    variant?: "solid" | "soft" | "outline" | "ghost";
  };
  /**
   * Size variant
   */
  size?: "sm" | "md" | "lg";
  /**
   * Radius variant
   */
  radius?: "none" | "small" | "medium" | "large" | "full";
}

/**
 * EmptyState component for displaying empty states with illustrations
 *
 * @example
 * ```tsx
 * <EmptyState
 *   title="No items found"
 *   description="Get started by creating a new item"
 *   icon={<EmptyIcon />}
 *   action={{ label: "Create Item", onClick: handleCreate }}
 * />
 * ```
 */
export function EmptyState({
  title,
  description,
  icon,
  action,
  size = "md",
  radius = "medium",
  className = "",
  style,
  children,
  ...props
}: EmptyStateProps) {
  const customStyle: React.CSSProperties = {
    ...style,
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  const sizeClasses = {
    sm: "empty-state-sm",
    md: "empty-state-md",
    lg: "empty-state-lg",
  };

  const emptyStateClasses = ["empty-state", sizeClasses[size], className].filter(Boolean).join(" ");

  return (
    <div className={emptyStateClasses} style={customStyle} {...props}>
      {icon && <div className="empty-state-icon">{icon}</div>}
      {title && <h3 className="empty-state-title">{title}</h3>}
      {description && <p className="empty-state-description">{description}</p>}
      {children && <div className="empty-state-content">{children}</div>}
      {action && (
        <div className="empty-state-action">
          <Button variant={action.variant || "solid"} onClick={action.onClick}>
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
}

export default EmptyState;
