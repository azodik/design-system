import React from "react";

interface BellOffIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BellOffIcon: React.FC<BellOffIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" />
      <path d="M17 17H3a3 3 0 0 0 0-6c.9 0 1.8.1 2.6.3" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
};

export default BellOffIcon;
