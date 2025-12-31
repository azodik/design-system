import React from "react";

export interface HeatmapData {
  /**
   * Date for this cell
   */
  date: Date | string;
  /**
   * Value for this cell
   */
  value: number;
  /**
   * Optional label/tooltip
   */
  label?: string;
}

export interface HeatmapProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Heatmap data
   */
  data: HeatmapData[];
  /**
   * Start date
   */
  startDate?: Date;
  /**
   * End date
   */
  endDate?: Date;
  /**
   * Color scale (array of colors)
   */
  colors?: string[];
  /**
   * Value thresholds for colors
   */
  thresholds?: number[];
  /**
   * Show labels
   */
  showLabels?: boolean;
  /**
   * Size of each cell
   */
  cellSize?: number;
  /**
   * Gap between cells
   */
  gap?: number;
}

/**
 * Heatmap component for calendar heatmap visualization
 *
 * @example
 * ```tsx
 * <Heatmap
 *   data={heatmapData}
 *   startDate={new Date("2024-01-01")}
 *   endDate={new Date("2024-12-31")}
 * />
 * ```
 */
export function Heatmap({
  data,
  startDate: _startDate,
  endDate: _endDate,
  colors = ["#ebedf0", "#c6e48b", "#40c463", "#30a14e", "#216e39"],
  thresholds = [0, 1, 5, 10, 20],
  showLabels = true,
  cellSize = 12,
  gap = 2,
  className = "",
  ...props
}: HeatmapProps) {
  const getColorForValue = (value: number): string => {
    for (let i = thresholds.length - 1; i >= 0; i--) {
      if (value >= thresholds[i]) {
        return colors[i] || colors[colors.length - 1];
      }
    }
    return colors[0];
  };

  const heatmapClasses = ["heatmap", className].filter(Boolean).join(" ");

  return (
    <div className={heatmapClasses} {...props}>
      <div
        className="heatmap-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(53, 1fr)",
          gap: `${gap}px`,
        }}
      >
        {data.map((item, index) => {
          const date = typeof item.date === "string" ? new Date(item.date) : item.date;
          const color = getColorForValue(item.value);

          return (
            <div
              key={index}
              className="heatmap-cell"
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                backgroundColor: color,
                borderRadius: "2px",
              }}
              title={item.label || `${date.toLocaleDateString()}: ${item.value}`}
              aria-label={item.label || `${date.toLocaleDateString()}: ${item.value}`}
            />
          );
        })}
      </div>
      {showLabels && (
        <div className="heatmap-legend">
          <span className="heatmap-legend-label">Less</span>
          <div className="heatmap-legend-colors">
            {colors.map((color, index) => (
              <div
                key={index}
                className="heatmap-legend-color"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span className="heatmap-legend-label">More</span>
        </div>
      )}
    </div>
  );
}

export default Heatmap;
