import React from "react";

interface SatisfactionIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SatisfactionIcon: React.FC<SatisfactionIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor">
        <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
        <path
          strokeLinecap="square"
          strokeWidth="2"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"
        />
        <path
          strokeLinecap="square"
          strokeWidth="2"
          d="M17 9.5a1.5 1.5 0 0 1-3 0m-4 0a1.5 1.5 0 0 1-3 0M8.535 16A4 4 0 0 1 12 14c1.48 0 2.773.804 3.465 2"
        />
      </g>
    </svg>
  );
};

export default SatisfactionIcon;
