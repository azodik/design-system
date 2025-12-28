import React from "react";

interface BenchmarkIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BenchmarkIcon: React.FC<BenchmarkIconProps> = ({ size = 20, className, style }) => {
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
        d="M14.562 13.625c.636-1.1.938-2.387.938-3.75a7.5 7.5 0 1 0-13.997 3.75m5.56 0l3.75-4.688"
      />
    </svg>
  );
};

export default BenchmarkIcon;
