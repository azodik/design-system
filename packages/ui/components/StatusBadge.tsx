import React from "react";
import Badge from "./Badge";

export type StatusType =
  | "online"
  | "offline"
  | "away"
  | "busy"
  | "pending"
  | "success"
  | "error"
  | "warning"
  | "info";

export interface StatusBadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  /**
   * Status type
   */
  status: StatusType;
  /**
   * Show label text
   */
  label?: string;
  /**
   * Show pulse animation
   */
  pulse?: boolean;
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
  /**
   * Custom label
   */
  children?: React.ReactNode;
}

const STATUS_CONFIG: Record<StatusType, { color: string; label: string }> = {
  online: { color: "grass", label: "Online" },
  offline: { color: "ruby", label: "Offline" },
  away: { color: "amber", label: "Away" },
  busy: { color: "ruby", label: "Busy" },
  pending: { color: "amber", label: "Pending" },
  success: { color: "grass", label: "Success" },
  error: { color: "ruby", label: "Error" },
  warning: { color: "amber", label: "Warning" },
  info: { color: "cyan", label: "Info" },
};

/**
 * Status Badge component for status indicators
 *
 * @example
 * ```tsx
 * <StatusBadge status="online" label="Active" />
 * <StatusBadge status="offline" pulse />
 * ```
 */
export function StatusBadge({
  status,
  label,
  pulse = false,
  size = "medium",
  children,
  className = "",
  ...props
}: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const displayLabel = children || label || config.label;

  const statusBadgeClasses = [
    "status-badge",
    `status-badge-${status}`,
    `status-badge-size-${size}`,
    pulse && "status-badge-pulse",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={statusBadgeClasses} {...props}>
      <Badge
        variant="solid"
        color={config.color}
        size={size === "small" ? "xs" : size === "large" ? "md" : "sm"}
        className="status-badge-indicator"
      >
        <span className="status-badge-dot" />
      </Badge>
      {displayLabel && <span className="status-badge-label">{displayLabel}</span>}
    </span>
  );
}

export default StatusBadge;
