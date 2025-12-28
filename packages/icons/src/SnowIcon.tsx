import React from "react";

interface SnowIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SnowIcon: React.FC<SnowIconProps> = ({ size = 20, className, style }) => {
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
        <path d="M10 21v-1m0-16V3m0 6a3 3 0 0 0 0 6m4 5l1.25-2.5L18 18M14 4l1.25 2.5L18 6" />
        <path d="m17 21l-3-6l1.5-3H22m-5-9l-3 6l1.5 3M2 12h1" />
        <path d="m20 10l-1.5 2l1.5 2M3.64 18.36l.7-.7m0-11.32l-.7-.7" />
      </g>
    </svg>
  );
};

export default SnowIcon;
