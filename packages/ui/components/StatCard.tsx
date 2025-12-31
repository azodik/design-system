import React from "react";
import Card, { CardProps } from "./Card";
import { Skeleton } from "./Skeleton";
import { TrendingUpIcon, TrendingDownIcon } from "@azodik/icons";

export interface StatCardProps extends Omit<CardProps, "children"> {
  /**
   * Title of the stat card
   */
  title: string;
  /**
   * Main value to display
   */
  value: string | number;
  /**
   * Percentage change (can be positive or negative)
   */
  change?: number;
  /**
   * Trend direction ("up" | "down" | "neutral")
   * If not provided, will be inferred from change value
   */
  trend?: "up" | "down" | "neutral";
  /**
   * Icon to display (typically a trending icon)
   */
  icon?: React.ReactNode;
  /**
   * Description text (e.g., "vs last month")
   */
  description?: string;
  /**
   * Loading state - shows skeleton loader
   */
  loading?: boolean;
  /**
   * Click handler - makes card clickable
   */
  onClick?: () => void;
  /**
   * Custom value formatter
   */
  formatValue?: (value: string | number) => React.ReactNode;
}

/**
 * StatCard component for displaying KPI/metrics with trend indicators
 *
 * @example
 * ```tsx
 * <StatCard
 *   title="Total Revenue"
 *   value="$45,231"
 *   change={+12.5}
 *   trend="up"
 *   icon={<TrendingUpIcon />}
 *   description="vs last month"
 * />
 * ```
 */
export const StatCard = React.memo(function StatCard({
  title,
  value,
  change,
  trend,
  icon,
  description,
  loading = false,
  onClick,
  formatValue,
  className = "",
  variant = "surface",
  size = "sm",
  radius = "medium",
  ...props
}: StatCardProps) {
  // Infer trend from change if not explicitly provided
  const inferredTrend: "up" | "down" | "neutral" = React.useMemo(() => {
    if (trend) return trend;
    if (change === undefined || change === null) return "neutral";
    if (change > 0) return "up";
    if (change < 0) return "down";
    return "neutral";
  }, [trend, change]);

  // Format change percentage
  const formattedChange = React.useMemo(() => {
    if (change === undefined || change === null) return null;
    const absChange = Math.abs(change);
    const sign = change >= 0 ? "+" : "";
    return `${sign}${absChange.toFixed(1)}%`;
  }, [change]);

  // Determine trend color class
  const trendColorClass = React.useMemo(() => {
    switch (inferredTrend) {
      case "up":
        return "stat-trend-up";
      case "down":
        return "stat-trend-down";
      default:
        return "stat-trend-neutral";
    }
  }, [inferredTrend]);

  // Get trend icon
  const trendIcon = React.useMemo(() => {
    if (icon) return icon;
    switch (inferredTrend) {
      case "up":
        return <TrendingUpIcon size={16} />;
      case "down":
        return <TrendingDownIcon size={16} />;
      default:
        return null;
    }
  }, [icon, inferredTrend]);

  // Format value
  const displayValue = React.useMemo(() => {
    if (formatValue) return formatValue(value);
    return value;
  }, [value, formatValue]);

  const cardClasses = ["stat-card", onClick && "stat-card-clickable", className]
    .filter(Boolean)
    .join(" ");

  if (loading) {
    return (
      <Card variant={variant} size={size} radius={radius} className={cardClasses} {...props}>
        <div className="stat-card-header">
          <Skeleton variant="text" width="60%" height="1rem" />
        </div>
        <div className="stat-card-value">
          <Skeleton variant="text" width="80%" height="2rem" />
        </div>
        <div className="stat-card-footer">
          <Skeleton variant="text" width="40%" height="0.875rem" />
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
      <div className="stat-card-header">
        <span className="stat-card-title">{title}</span>
        {trendIcon && <span className="stat-card-icon">{trendIcon}</span>}
      </div>
      <div className="stat-card-value">{displayValue}</div>
      {(formattedChange || description) && (
        <div className="stat-card-footer">
          {formattedChange && (
            <span className={`stat-card-change ${trendColorClass}`}>{formattedChange}</span>
          )}
          {description && <span className="stat-card-description">{description}</span>}
        </div>
      )}
    </Card>
  );
});

export default StatCard;
