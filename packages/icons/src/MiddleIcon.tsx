import React from "react";

interface MiddleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MiddleIcon: React.FC<MiddleIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="m16 10l4-2l-8-4l-8 4l4 2" />
        <path fill="currentColor" d="m12 12l-4-2l-4 2l8 4l8-4l-4-2z" />
        <path d="m8 14l-4 2l8 4l8-4l-4-2" />
      </g>
    </svg>
  );
};

export default MiddleIcon;
