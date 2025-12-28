import React from "react";

interface BarChartIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BarChartIcon: React.FC<BarChartIconProps> = ({ size = 20, className, style }) => {
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
        d="M64 64h64v298.667H64zm106.667 149.333h64v149.334h-64zM448 170.667h-64v192h64zm-170.667-64h64v256h-64zM448 405.333H64V448h384z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default BarChartIcon;
