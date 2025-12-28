import React from "react";

interface AreaChartIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AreaChartIcon: React.FC<AreaChartIconProps> = ({ size = 20, className, style }) => {
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
        d="M448 362.667V64L292.437 197.333H142.706l-79.353 79.353l.647 85.981zm-.001 42.666h-384V448h384z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AreaChartIcon;
