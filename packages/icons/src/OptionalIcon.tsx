import React from "react";

interface OptionalIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const OptionalIcon: React.FC<OptionalIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3" />
        <path d="m14 28l8-8l4 7l8-8" />
      </g>
    </svg>
  );
};

export default OptionalIcon;
