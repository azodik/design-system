import React from "react";

interface ArrowDownUpIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowDownUpIcon: React.FC<ArrowDownUpIconProps> = ({ size = 20, className, style }) => {
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
      <path d="m3 16 4-4-4-4" />
      <path d="M7 12h14" />
      <path d="m21 8-4 4 4 4" />
      <path d="M17 12H3" />
    </svg>
  );
};

export default ArrowDownUpIcon;
