import React from "react";

export interface SparklineProps extends Omit<React.SVGProps<SVGSVGElement>, "fill"> {
  /**
   * Data points (numbers)
   */
  data: number[];
  /**
   * Width of sparkline
   */
  width?: number;
  /**
   * Height of sparkline
   */
  height?: number;
  /**
   * Color of the line
   */
  color?: string;
  /**
   * Fill area under line
   */
  fill?: boolean;
  /**
   * Show dots on data points
   */
  showDots?: boolean;
  /**
   * Smooth curve
   */
  smooth?: boolean;
}

/**
 * Sparkline component for mini inline charts
 *
 * @example
 * ```tsx
 * <Sparkline
 *   data={[10, 20, 15, 30, 25, 40]}
 *   width={100}
 *   height={30}
 *   color="#f97316"
 * />
 * ```
 */
export function Sparkline({
  data,
  width = 100,
  height = 30,
  color = "var(--accent-9, #f97316)",
  fill = false,
  showDots = false,
  smooth = false,
  ...props
}: SparklineProps) {
  if (data.length === 0) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1 || 1)) * width;
    const y = height - ((value - min) / range) * height;
    return { x, y, value };
  });

  const pathData = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  const smoothPathData = smooth
    ? points
        .map((point, index) => {
          if (index === 0) return `M ${point.x} ${point.y}`;
          const prev = points[index - 1];
          const cp1x = prev.x + (point.x - prev.x) / 2;
          const cp1y = prev.y;
          const cp2x = prev.x + (point.x - prev.x) / 2;
          const cp2y = point.y;
          return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
        })
        .join(" ")
    : pathData;

  const fillPath = fill ? `${smoothPathData} L ${width} ${height} L 0 ${height} Z` : undefined;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="sparkline"
      {...props}
    >
      {fill && fillPath && (
        <path d={fillPath} fill={color} opacity="0.2" className="sparkline-fill" />
      )}
      <path
        d={smoothPathData}
        fill="none"
        stroke={color}
        strokeWidth="2"
        className="sparkline-line"
      />
      {showDots &&
        points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="2"
            fill={color}
            className="sparkline-dot"
          />
        ))}
    </svg>
  );
}

export default Sparkline;
