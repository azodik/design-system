import React from "react";
import Card, { CardProps } from "./Card";

export interface MetricCardProps extends Omit<CardProps, "children"> {
  /**
   * Metric label/title
   */
  label: string;
  /**
   * Metric value
   */
  value: string | number;
  /**
   * Optional icon
   */
  icon?: React.ReactNode;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
}

/**
 * MetricCard - Simple KPI card component (simpler than StatCard)
 *
 * @example
 * ```tsx
 * <MetricCard
 *   label="Total Users"
 *   value="1,234"
 *   icon={<UsersIcon />}
 * />
 * ```
 */
export function MetricCard({
  label,
  value,
  icon,
  loading = false,
  onClick,
  className = "",
  variant = "surface",
  size = "sm",
  radius = "medium",
  ...props
}: MetricCardProps) {
  const cardClasses = ["metric-card", onClick && "metric-card-clickable", className]
    .filter(Boolean)
    .join(" ");

  if (loading) {
    return (
      <Card variant={variant} size={size} radius={radius} className={cardClasses} {...props}>
        <div className="metric-card-content">
          <div className="metric-card-label">
            <div className="skeleton-placeholder" style={{ width: "60%", height: "0.875rem" }} />
          </div>
          <div className="metric-card-value">
            <div className="skeleton-placeholder" style={{ width: "80%", height: "1.5rem" }} />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      variant={variant}
      size={size}
      radius={radius}
      className={cardClasses}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        ...props.style,
      }}
      {...props}
    >
      <div className="metric-card-content">
        <div className="metric-card-header">
          <span className="metric-card-label">{label}</span>
          {icon && <span className="metric-card-icon">{icon}</span>}
        </div>
        <div className="metric-card-value">{value}</div>
      </div>
    </Card>
  );
}

export default MetricCard;
