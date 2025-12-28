import React from "react";

interface StoreIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const StoreIcon: React.FC<StoreIconProps> = ({ size = 20, className, style }) => {
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
        d="M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A4 4 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a4 4 0 0 1-1 2.646M14 9a1 1 0 1 1 2 0a2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0a1 1 0 0 1 2 0a2 2 0 1 0 4 0"
      />
    </svg>
  );
};

export default StoreIcon;
