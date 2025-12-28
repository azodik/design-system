import React from "react";

interface TryIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TryIcon: React.FC<TryIconProps> = ({ size = 20, className, style }) => {
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
        d="M9 8.76V3h2v4.5L15 5v2.36l-4 2.51v2.35l4-2.5v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.86v-2.38L6 13v-2.36z"
      />
    </svg>
  );
};

export default TryIcon;
