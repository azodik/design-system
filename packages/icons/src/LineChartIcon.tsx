import React from "react";

interface LineChartIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LineChartIcon: React.FC<LineChartIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m437.478 107.795l-21.623-23.59l-123.418 113.128H142.706l-79.353 79.353l22.627 22.628l69.967-69.981H304.89zm-7.3 123.228l14.311 28.621l-111.222 55.611l-136.894-21.068l-90.55 70.443l-19.646-25.26l101.442-78.899l140.445 21.598zm-366.18 174.31H448V448H64z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LineChartIcon;
