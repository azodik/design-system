import React from "react";

export interface TimelineChartDataPoint {
  /**
   * X value (time/date)
   */
  x: Date | string | number;
  /**
   * Y value
   */
  y: number;
  /**
   * Optional label
   */
  label?: string;
}

export interface TimelineChartProps extends Omit<React.SVGProps<SVGSVGElement>, "fill"> {
  /**
   * Data points
   */
  data: TimelineChartDataPoint[];
  /**
   * Chart width
   */
  width?: number;
  /**
   * Chart height
   */
  height?: number;
  /**
   * Line color
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
  /**
   * Show grid
   */
  showGrid?: boolean;
}

/**
 * Timeline Chart component for time-series visualization
 *
 * @example
 * ```tsx
 * <TimelineChart
 *   data={[
 *     { x: new Date("2024-01-01"), y: 10 },
 *     { x: new Date("2024-01-02"), y: 20 },
 *   ]}
 *   width={400}
 *   height={200}
 * />
 * ```
 */
export function TimelineChart({
  data,
  width = 400,
  height = 200,
  color = "var(--accent-9, #f97316)",
  fill = false,
  showDots = true,
  smooth = false,
  showGrid = true,
  ...props
}: TimelineChartProps) {
  if (data.length === 0) return null;

  const padding = 20;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Normalize x values to numbers
  const normalizedData = data.map((point) => {
    let xValue: number;
    if (point.x instanceof Date) {
      xValue = point.x.getTime();
    } else if (typeof point.x === "string") {
      xValue = new Date(point.x).getTime();
    } else {
      xValue = point.x;
    }
    return { ...point, x: xValue };
  });

  const xValues = normalizedData.map((p) => p.x);
  const yValues = normalizedData.map((p) => p.y);

  const minX = Math.min(...xValues);
  const maxX = Math.max(...xValues);
  const minY = Math.min(...yValues);
  const maxY = Math.max(...yValues);

  const xRange = maxX - minX || 1;
  const yRange = maxY - minY || 1;

  const points = normalizedData.map((point) => {
    const x = padding + ((point.x - minX) / xRange) * chartWidth;
    const y = padding + chartHeight - ((point.y - minY) / yRange) * chartHeight;
    return { x, y, value: point };
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

  const fillPath = fill
    ? `${smoothPathData} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`
    : undefined;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="timeline-chart"
      {...props}
    >
      {showGrid && (
        <g className="timeline-chart-grid">
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
            <line
              key={ratio}
              x1={padding}
              y1={padding + ratio * chartHeight}
              x2={width - padding}
              y2={padding + ratio * chartHeight}
              stroke="var(--color-border)"
              strokeWidth="1"
              strokeDasharray="2,2"
              opacity="0.5"
            />
          ))}
        </g>
      )}
      {fill && fillPath && (
        <path d={fillPath} fill={color} opacity="0.2" className="timeline-chart-fill" />
      )}
      <path
        d={smoothPathData}
        fill="none"
        stroke={color}
        strokeWidth="2"
        className="timeline-chart-line"
      />
      {showDots &&
        points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill={color}
            className="timeline-chart-dot"
          />
        ))}
    </svg>
  );
}

export default TimelineChart;
