import React from "react";
import Card from "./Card";

export interface ComparisonData {
  /**
   * Data label
   */
  label: string;
  /**
   * Current period value
   */
  current: number;
  /**
   * Previous period value
   */
  previous: number;
  /**
   * Optional unit
   */
  unit?: string;
  /**
   * Optional format function
   */
  format?: (value: number) => string;
}

export interface ComparisonModeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Comparison data
   */
  data: ComparisonData[];
  /**
   * Current period label
   */
  currentLabel?: string;
  /**
   * Previous period label
   */
  previousLabel?: string;
  /**
   * Show percentage change
   */
  showPercentage?: boolean;
  /**
   * Show trend indicator
   */
  showTrend?: boolean;
}

/**
 * Comparison Mode component - Compare data across time periods
 *
 * @example
 * ```tsx
 * <ComparisonMode
 *   data={comparisonData}
 *   currentLabel="This Month"
 *   previousLabel="Last Month"
 *   showPercentage
 * />
 * ```
 */
export function ComparisonMode({
  data,
  currentLabel = "Current",
  previousLabel = "Previous",
  showPercentage = true,
  showTrend = true,
  className = "",
  ...props
}: ComparisonModeProps) {
  const calculateChange = (current: number, previous: number): number => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous) * 100;
  };

  const formatValue = (
    value: number,
    format?: (value: number) => string,
    unit?: string,
  ): string => {
    if (format) return format(value);
    return unit ? `${value} ${unit}` : String(value);
  };

  const comparisonClasses = ["comparison-mode", className].filter(Boolean).join(" ");

  return (
    <div className={comparisonClasses} {...props}>
      {data.map((item, index) => {
        const change = calculateChange(item.current, item.previous);
        const isPositive = change >= 0;
        const changeAbs = Math.abs(change);

        return (
          <Card key={index} className="comparison-mode-item">
            <div className="comparison-mode-header">
              <h3 className="comparison-mode-label">{item.label}</h3>
              {showTrend && (
                <div className={`comparison-mode-trend ${isPositive ? "trend-up" : "trend-down"}`}>
                  {isPositive ? "↑" : "↓"}
                </div>
              )}
            </div>
            <div className="comparison-mode-values">
              <div className="comparison-mode-value">
                <span className="comparison-mode-value-label">{currentLabel}</span>
                <span className="comparison-mode-value-number">
                  {formatValue(item.current, item.format, item.unit)}
                </span>
              </div>
              <div className="comparison-mode-value">
                <span className="comparison-mode-value-label">{previousLabel}</span>
                <span className="comparison-mode-value-number">
                  {formatValue(item.previous, item.format, item.unit)}
                </span>
              </div>
            </div>
            {showPercentage && (
              <div
                className={`comparison-mode-change ${isPositive ? "change-positive" : "change-negative"}`}
              >
                {isPositive ? "+" : ""}
                {changeAbs.toFixed(1)}%
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}

export default ComparisonMode;
