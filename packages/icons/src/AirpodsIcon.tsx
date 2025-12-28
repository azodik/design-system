import React from "react";

interface AirpodsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AirpodsIcon: React.FC<AirpodsIconProps> = ({ size = 20, className, style }) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 4a4 4 0 0 1 4 3.8v10.7a1.5 1.5 0 0 1-3 0V12H6a4 4 0 0 1-4-3.8V8a4 4 0 0 1 4-4m12 0a4 4 0 0 0-4 3.8v10.7a1.5 1.5 0 0 0 3 0V12h1a4 4 0 0 0 4-3.8V8a4 4 0 0 0-4-4"
      />
    </svg>
  );
};

export default AirpodsIcon;
