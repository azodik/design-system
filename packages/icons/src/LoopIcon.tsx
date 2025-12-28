import React from "react";

interface LoopIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LoopIcon: React.FC<LoopIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      <path d="M17 8h4v4" />
    </svg>
  );
};

export default LoopIcon;
