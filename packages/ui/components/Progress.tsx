import React from "react";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: "solid" | "soft";
  indeterminate?: boolean;
}

export function Progress({
  value = 0,
  max = 100,
  variant = "solid",
  indeterminate = false,
  className = "",
  style,
  ...props
}: ProgressProps) {
  const percentage = indeterminate ? 0 : Math.min(Math.max((value / max) * 100, 0), 100);

  const containerClasses = [
    "az-Progress",
    `az-variant-${variant}`,
    indeterminate && "az-Progress-indeterminate",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={containerClasses}
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={max}
      style={style}
      {...props}
    >
      <div className="az-Progress-bar" style={{ width: `${percentage}%` }} />
    </div>
  );
}
