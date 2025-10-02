import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info" | "neutral";
  size?: "sm" | "md" | "lg";
  rounded?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
  onRemove?: () => void;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = "md",
  icon,
  onRemove,
  className = "",
  ...props
}: BadgeProps) {
  const badgeClasses = [
    "badge",
    `badge-${variant}`,
    size !== "md" && `badge-${size}`,
    rounded !== "md" && `badge-rounded-${rounded}`,
    icon && "badge-icon",
    onRemove && "badge-close",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={badgeClasses} {...props}>
      {icon && <span className="icon">{icon}</span>}
      {children}
      {onRemove && (
        <button type="button" className="close-btn" onClick={onRemove} aria-label="Remove badge" />
      )}
    </span>
  );
}
