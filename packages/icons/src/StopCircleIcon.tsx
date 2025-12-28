import React from "react";

interface StopCircleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const StopCircleIcon: React.FC<StopCircleIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M9 9v6h6V9z"
      />
    </svg>
  );
};

export default StopCircleIcon;
