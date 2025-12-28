import React from "react";

interface SkipBackCircleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SkipBackCircleIcon: React.FC<SkipBackCircleIconProps> = ({ size = 20, className, style }) => {
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
      <polygon points="19 4 9 12 19 20 19 4" />
      <line x1="5" y1="5" x2="5" y2="19" />
      <polygon points="8 12 14 8 14 16 8 12" />
      <line x1="8" x2="8" y1="8" y2="16" />
    </svg>
  );
};

export default SkipBackCircleIcon;
