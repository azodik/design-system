import React from "react";

interface BarChart4IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BarChart4Icon: React.FC<BarChart4IconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="M3 3v18h18" />
      <path d="M7 16h8" />
      <path d="M7 12h5" />
      <path d="M7 8h2" />
      <path d="M17 16h2" />
      <path d="M15 12h4" />
      <path d="M13 8h6" />
    </svg>
  );
};

export default BarChart4Icon;
