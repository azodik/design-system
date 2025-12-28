import React from "react";

interface WeekIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const WeekIcon: React.FC<WeekIconProps> = ({ size = 20, className, style }) => {
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
        d="M13 5h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m7 0h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M6 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"
      />
    </svg>
  );
};

export default WeekIcon;
