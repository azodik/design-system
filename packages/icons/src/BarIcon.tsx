import React from "react";

interface BarIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BarIcon: React.FC<BarIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m6 2v14h11V5z"
      />
    </svg>
  );
};

export default BarIcon;
