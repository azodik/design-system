import React from "react";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Progress value (0-100)
   */
  value?: number;
  /**
   * Maximum value (default: 100)
   */
  max?: number;
  /**
   * Show value label
   */
  showValue?: boolean;
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
  /**
   * Color variant
   */
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  /**
   * Variant: linear or circular
   */
  variant?: "linear" | "circular";
  /**
   * Indeterminate (animated) progress
   */
  indeterminate?: boolean;
  /**
   * Custom value formatter
   */
  formatValue?: (value: number, max: number) => string;
}

/**
 * Progress indicator component (linear or circular)
 *
 * @example
 * ```tsx
 * <Progress value={75} showValue />
 * <Progress variant="circular" value={50} />
 * ```
 */
export function Progress({
  value = 0,
  max = 100,
  showValue = false,
  size = "medium",
  color = "azodik",
  variant = "linear",
  indeterminate = false,
  formatValue,
  className = "",
  style,
  ...props
}: ProgressProps) {
  const isNamedColor = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const formatDisplayValue = (): string => {
    if (formatValue) return formatValue(value, max);
    return `${Math.round(percentage)}%`;
  };

  const progressClasses = [
    "progress",
    `progress-${variant}`,
    `progress-size-${size}`,
    indeterminate && "progress-indeterminate",
    isNamedColor ? `progress-color-${color}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--progress-color": color } : {}),
  } as React.CSSProperties;

  if (variant === "circular") {
    const radius = size === "small" ? 20 : size === "large" ? 40 : 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={progressClasses} style={customStyle} {...props}>
        <svg
          className="progress-circular-svg"
          width={radius * 2 + 10}
          height={radius * 2 + 10}
          viewBox={`0 0 ${radius * 2 + 10} ${radius * 2 + 10}`}
        >
          <circle
            className="progress-circular-track"
            cx={(radius * 2 + 10) / 2}
            cy={(radius * 2 + 10) / 2}
            r={radius}
            fill="none"
            strokeWidth="4"
          />
          <circle
            className="progress-circular-fill"
            cx={(radius * 2 + 10) / 2}
            cy={(radius * 2 + 10) / 2}
            r={radius}
            fill="none"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={indeterminate ? undefined : strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${(radius * 2 + 10) / 2} ${(radius * 2 + 10) / 2})`}
          />
        </svg>
        {showValue && !indeterminate && (
          <span className="progress-value">{formatDisplayValue()}</span>
        )}
      </div>
    );
  }

  return (
    <div className={progressClasses} style={customStyle} {...props}>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: indeterminate ? undefined : `${percentage}%`,
          }}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
      {showValue && !indeterminate && (
        <span className="progress-value">{formatDisplayValue()}</span>
      )}
    </div>
  );
}

export default Progress;
