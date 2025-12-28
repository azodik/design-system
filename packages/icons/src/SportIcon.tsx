import React from "react";

interface SportIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SportIcon: React.FC<SportIconProps> = ({ size = 20, className, style }) => {
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
        <path d="m15 4l6 2v5h-3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l6-2a3 3 0 0 0 6 0" />
        <path d="M10.5 11H13l-1.5 5" />
      </g>
    </svg>
  );
};

export default SportIcon;
