import React from "react";

interface WatchIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const WatchIcon: React.FC<WatchIconProps> = ({ size = 20, className, style }) => {
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
        d="M6 12a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6m14 0a7.94 7.94 0 0 0-3.05-6.27L16 0H8l-.95 5.73A7.94 7.94 0 0 0 4 12c0 2.54 1.19 4.81 3.05 6.27L8 24h8l.95-5.73A7.96 7.96 0 0 0 20 12"
      />
    </svg>
  );
};

export default WatchIcon;
