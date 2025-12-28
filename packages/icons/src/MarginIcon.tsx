import React from "react";

interface MarginIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MarginIcon: React.FC<MarginIconProps> = ({ size = 20, className, style }) => {
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
        d="M20 4v5l-1.5-1.5l-13 13l-2-2l13-13L15 4zm-3 16a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3m0-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M7 12a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3m0-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"
      />
    </svg>
  );
};

export default MarginIcon;
