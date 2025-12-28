import React from "react";

interface GuideIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GuideIcon: React.FC<GuideIconProps> = ({ size = 20, className, style }) => {
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
        d="M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4l-5 4V7h-3a1 1 0 0 0-1 1"
      />
    </svg>
  );
};

export default GuideIcon;
