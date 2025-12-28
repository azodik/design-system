import React from "react";

interface SparkIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SparkIcon: React.FC<SparkIconProps> = ({ size = 20, className, style }) => {
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
        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
        <path d="M11.669 17.994Q6.489 17.814 3 12q3.6-6 9-6t9 6m-2 10.5a4.75 4.75 0 0 1 3.5-3.5a4.75 4.75 0 0 1-3.5-3.5a4.75 4.75 0 0 1-3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
      </g>
    </svg>
  );
};

export default SparkIcon;
