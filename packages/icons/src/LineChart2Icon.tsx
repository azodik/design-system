import React from "react";

interface LineChart2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LineChart2Icon: React.FC<LineChart2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="m7 16 4-4 4 4 6-6" />
      <path d="M21 12h-4" />
    </svg>
  );
};

export default LineChart2Icon;
