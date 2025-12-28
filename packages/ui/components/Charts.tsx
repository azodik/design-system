import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export interface ChartData {
  name: string;
  value?: number;
  [key: string]: string | number | undefined;
}

export interface ChartProps {
  data: ChartData[];
  title?: string;
  subtitle?: string;
  width?: number | `${number}%`;
  height?: number | `${number}%`;
  className?: string;
  showLegend?: boolean;
  showTooltip?: boolean;
  showGrid?: boolean;
}

export interface LineChartProps extends ChartProps {
  dataKey: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export interface AreaChartProps extends ChartProps {
  dataKey: string;
  fillColor?: string;
  strokeColor?: string;
}

export interface BarChartProps extends ChartProps {
  dataKey: string;
  fillColor?: string;
}

export interface PieChartProps extends ChartProps {
  dataKey: string;
  nameKey: string;
  colors?: string[];
}

/**
 * LineChart component for displaying line charts
 *
 * @param data - Array of data points
 * @param dataKey - Key in data object to use for the line
 * @param title - Optional chart title
 * @param subtitle - Optional chart subtitle
 * @param width - Chart width (default: "100%")
 * @param height - Chart height (default: 400)
 * @param className - Additional CSS classes
 * @param strokeColor - Line stroke color (default: "#3b82f6")
 * @param strokeWidth - Line stroke width (default: 2)
 * @param showLegend - Show legend (default: true)
 * @param showTooltip - Show tooltip (default: true)
 * @param showGrid - Show grid (default: true)
 */
export const LineChartComponent: React.FC<LineChartProps> = React.memo(
  ({
    data,
    dataKey,
    title,
    subtitle,
    width = "100%",
    height = 400,
    className = "",
    strokeColor = "#3b82f6",
    strokeWidth = 2,
    showLegend = true,
    showTooltip = true,
    showGrid = true,
  }) => {
    return (
      <div className={`chart-container ${className}`}>
        {title && <div className="chart-title">{title}</div>}
        {subtitle && <div className="chart-subtitle">{subtitle}</div>}
        <ResponsiveContainer width={width} height={height}>
          <LineChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />}
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            {showLegend && <Legend />}
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              className="chart-line"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
);

LineChartComponent.displayName = "LineChartComponent";

/**
 * AreaChart component for displaying area charts
 *
 * @param data - Array of data points
 * @param dataKey - Key in data object to use for the area
 * @param title - Optional chart title
 * @param subtitle - Optional chart subtitle
 * @param width - Chart width (default: "100%")
 * @param height - Chart height (default: 400)
 * @param className - Additional CSS classes
 * @param fillColor - Area fill color (default: "#3b82f6")
 * @param strokeColor - Area stroke color (default: "#3b82f6")
 * @param showLegend - Show legend (default: true)
 * @param showTooltip - Show tooltip (default: true)
 * @param showGrid - Show grid (default: true)
 */
export const AreaChartComponent: React.FC<AreaChartProps> = React.memo(
  ({
    data,
    dataKey,
    title,
    subtitle,
    width = "100%",
    height = 400,
    className = "",
    fillColor = "#3b82f6",
    strokeColor = "#3b82f6",
    showLegend = true,
    showTooltip = true,
    showGrid = true,
  }) => {
    return (
      <div className={`chart-container ${className}`}>
        {title && <div className="chart-title">{title}</div>}
        {subtitle && <div className="chart-subtitle">{subtitle}</div>}
        <ResponsiveContainer width={width} height={height}>
          <AreaChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />}
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            {showLegend && <Legend />}
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={strokeColor}
              fill={fillColor}
              className="chart-area"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  },
);

AreaChartComponent.displayName = "AreaChartComponent";

/**
 * BarChart component for displaying bar charts
 *
 * @param data - Array of data points
 * @param dataKey - Key in data object to use for the bars
 * @param title - Optional chart title
 * @param subtitle - Optional chart subtitle
 * @param width - Chart width (default: "100%")
 * @param height - Chart height (default: 400)
 * @param className - Additional CSS classes
 * @param fillColor - Bar fill color (default: "#3b82f6")
 * @param showLegend - Show legend (default: true)
 * @param showTooltip - Show tooltip (default: true)
 * @param showGrid - Show grid (default: true)
 */
export const BarChartComponent: React.FC<BarChartProps> = React.memo(
  ({
    data,
    dataKey,
    title,
    subtitle,
    width = "100%",
    height = 400,
    className = "",
    fillColor = "#3b82f6",
    showLegend = true,
    showTooltip = true,
    showGrid = true,
  }) => {
    return (
      <div className={`chart-container ${className}`}>
        {title && <div className="chart-title">{title}</div>}
        {subtitle && <div className="chart-subtitle">{subtitle}</div>}
        <ResponsiveContainer width={width} height={height}>
          <BarChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />}
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            {showLegend && <Legend />}
            <Bar dataKey={dataKey} fill={fillColor} className="chart-bar" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  },
);

BarChartComponent.displayName = "BarChartComponent";

/**
 * PieChart component for displaying pie charts
 *
 * @param data - Array of data points
 * @param dataKey - Key in data object to use for the pie slices
 * @param nameKey - Key in data object to use for slice names
 * @param title - Optional chart title
 * @param subtitle - Optional chart subtitle
 * @param width - Chart width (default: "100%")
 * @param height - Chart height (default: 400)
 * @param className - Additional CSS classes
 * @param colors - Array of colors for pie slices
 * @param showLegend - Show legend (default: true)
 * @param showTooltip - Show tooltip (default: true)
 */
export const PieChartComponent: React.FC<PieChartProps> = React.memo(
  ({
    data,
    dataKey,
    nameKey: _nameKey,
    title,
    subtitle,
    width = "100%",
    height = 400,
    className = "",
    colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"],
    showLegend = true,
    showTooltip = true,
  }) => {
    return (
      <div className={`chart-container ${className}`}>
        {title && <div className="chart-title">{title}</div>}
        {subtitle && <div className="chart-subtitle">{subtitle}</div>}
        <ResponsiveContainer width={width} height={height}>
          <PieChart>
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            {showLegend && <Legend />}
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={(props: { name?: string; value?: number; percent?: number }) =>
                `${props.name || ""} ${((props.percent || 0) * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey={dataKey}
              className="chart-pie"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  },
);

PieChartComponent.displayName = "PieChartComponent";

// Export individual components (no default wrapper needed)
export {
  LineChartComponent as LineChart,
  AreaChartComponent as AreaChart,
  BarChartComponent as BarChart,
  PieChartComponent as PieChart,
};
