import React from "react";

interface StopwatchIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const StopwatchIcon: React.FC<StopwatchIconProps> = ({ size = 20, className, style }) => {
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
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l3 3" />
      <path d="M5 3 2 6" />
      <path d="M22 6l-3-3" />
      <path d="M6.38 15.5 4 18" />
      <path d="M17.64 15.5 20 18" />
    </svg>
  );
};

export default StopwatchIcon;
