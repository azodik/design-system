import React from "react";

export interface GaugeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Current value
   */
  value: number;
  /**
   * Minimum value
   */
  min?: number;
  /**
   * Maximum value
   */
  max?: number;
  /**
   * Size of gauge
   */
  size?: number;
  /**
   * Thickness of gauge arc
   */
  thickness?: number;
  /**
   * Color of gauge
   */
  color?: string;
  /**
   * Show value label
   */
  showValue?: boolean;
  /**
   * Custom value formatter
   */
  formatValue?: (value: number) => string;
  /**
   * Gauge variant
   */
  variant?: "full" | "half" | "quarter";
}

/**
 * Gauge component for circular gauge/progress indicators
 *
 * @example
 * ```tsx
 * <Gauge
 *   value={75}
 *   min={0}
 *   max={100}
 *   size={120}
 *   showValue
 * />
 * ```
 */
export function Gauge({
  value,
  min = 0,
  max = 100,
  size = 120,
  thickness = 12,
  color = "var(--accent-9, #f97316)",
  showValue = true,
  formatValue,
  variant = "half",
  className = "",
  style,
  ...props
}: GaugeProps) {
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  const getArcParams = () => {
    const radius = (size - thickness) / 2;
    const centerX = size / 2;
    const centerY = size / 2;

    if (variant === "full") {
      const startAngle = -90;
      const endAngle = startAngle + (percentage / 100) * 360;
      return { radius, centerX, centerY, startAngle, endAngle };
    } else if (variant === "half") {
      const startAngle = -180;
      const endAngle = startAngle + (percentage / 100) * 180;
      return { radius, centerX, centerY, startAngle, endAngle };
    } else {
      const startAngle = -90;
      const endAngle = startAngle + (percentage / 100) * 90;
      return { radius, centerX, centerY, startAngle, endAngle };
    }
  };

  const { radius, centerX, centerY, startAngle, endAngle } = getArcParams();

  const startAngleRad = (startAngle * Math.PI) / 180;
  const endAngleRad = (endAngle * Math.PI) / 180;

  const x1 = centerX + radius * Math.cos(startAngleRad);
  const y1 = centerY + radius * Math.sin(startAngleRad);
  const x2 = centerX + radius * Math.cos(endAngleRad);
  const y2 = centerY + radius * Math.sin(endAngleRad);

  const largeArcFlag = percentage > 50 ? 1 : 0;

  const pathData = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

  const formatDisplayValue = (): string => {
    if (formatValue) return formatValue(value);
    return `${Math.round(percentage)}%`;
  };

  const gaugeClasses = ["gauge", `gauge-${variant}`, className].filter(Boolean).join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    width: size,
    height: variant === "half" ? size / 2 : size,
  } as React.CSSProperties;

  return (
    <div className={gaugeClasses} style={customStyle} {...props}>
      <svg width={size} height={variant === "half" ? size / 2 : size} className="gauge-svg">
        {/* Background arc */}
        <path
          d={
            variant === "full"
              ? `M ${centerX} ${centerY} L ${centerX - radius} ${centerY} A ${radius} ${radius} 0 1 1 ${centerX + radius} ${centerY} Z`
              : variant === "half"
                ? `M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`
                : `M ${centerX} ${centerY} L ${centerX} ${centerY - radius} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY} Z`
          }
          fill="none"
          stroke="var(--color-surface)"
          strokeWidth={thickness}
          className="gauge-background"
        />
        {/* Value arc */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          className="gauge-value"
        />
      </svg>
      {showValue && (
        <div className="gauge-value-label" style={{ color }}>
          {formatDisplayValue()}
        </div>
      )}
    </div>
  );
}

export default Gauge;
