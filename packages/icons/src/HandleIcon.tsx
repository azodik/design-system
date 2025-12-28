import React from "react";

interface HandleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HandleIcon: React.FC<HandleIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <circle cx="24" cy="24" r="20" />
        <circle cx="24" cy="24" r="12" />
      </g>
    </svg>
  );
};

export default HandleIcon;
