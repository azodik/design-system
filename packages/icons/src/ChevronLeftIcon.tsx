import React from "react";

interface ChevronLeftIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({ size = 20, className, style }) => {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};

export default ChevronLeftIcon;
