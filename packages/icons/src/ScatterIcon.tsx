import React from "react";

interface ScatterIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ScatterIcon: React.FC<ScatterIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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
        d="M7 11a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m4-8a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m5.6 11.6c1.65 0 3 1.34 3 3a3 3 0 0 1-3 3c-1.66 0-3-1.35-3-3a3 3 0 0 1 3-3"
      />
    </svg>
  );
};

export default ScatterIcon;
