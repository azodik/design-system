import React from "react";

interface GreedyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GreedyIcon: React.FC<GreedyIconProps> = ({ size = 20, className, style }) => {
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
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M8 10h8M8 14h6" />
    </svg>
  );
};

export default GreedyIcon;
