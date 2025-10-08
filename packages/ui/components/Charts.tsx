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
  [key: string]: any;
}

export interface ChartProps {
  data: ChartData[];
  title?: string;
  subtitle?: string;
  width?: number | string;
  height?: number | string;
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

// Line Chart Component
export const LineChartComponent: React.FC<LineChartProps> = ({
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
};

// Area Chart Component
export const AreaChartComponent: React.FC<AreaChartProps> = ({
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
};

// Bar Chart Component
export const BarChartComponent: React.FC<BarChartProps> = ({
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
};

// Pie Chart Component
export const PieChartComponent: React.FC<PieChartProps> = ({
  data,
  dataKey,
  nameKey,
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
            label={({ name, value, percent }: any) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
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
};

// Main Charts Component (wrapper)
export default function Charts() {
  return {
    LineChart: LineChartComponent,
    AreaChart: AreaChartComponent,
    BarChart: BarChartComponent,
    PieChart: PieChartComponent,
  };
}

// Export individual components
export {
  LineChartComponent as LineChart,
  AreaChartComponent as AreaChart,
  BarChartComponent as BarChart,
  PieChartComponent as PieChart,
};
