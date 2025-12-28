import React from "react";

interface TimerResetIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TimerResetIcon: React.FC<TimerResetIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M10 2h4" />
      <path d="M12 14v-4" />
      <path d="M4 13a8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8Z" />
      <path d="m2 2 4 4" />
      <path d="m22 2-4 4" />
    </svg>
  );
};

export default TimerResetIcon;
