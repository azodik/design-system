import React from "react";

interface PillsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PillsIcon: React.FC<PillsIconProps> = ({ size = 20, className, style }) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8a5 5 0 1 0 10 0A5 5 0 1 0 3 8m10 9a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4.5 4.5l7 7m8 3l-5 5"
      />
    </svg>
  );
};

export default PillsIcon;
