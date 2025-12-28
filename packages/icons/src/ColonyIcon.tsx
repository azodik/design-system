import React from "react";

interface ColonyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ColonyIcon: React.FC<ColonyIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <g fill="currentColor" strokeWidth="4">
        <path strokeLinejoin="round" d="M42 43V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v18" />
        <path d="M24 22c-9.941 0-18 8.059-18 18v4h36v-4c0-9.941-8.059-18-18-18Z" />
        <path strokeLinecap="round" d="M8 31V8m8 16V14" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M31 14h11" />
        <path d="M17 42v-3c0-9.389 3.134-17 7-17s7 7.611 7 17v3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 44h40" />
        <path d="M7 35s10.35-1 17-1s17 1 17 1" />
      </g>
    </svg>
  );
};

export default ColonyIcon;
