import React from "react";

interface VerifyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VerifyIcon: React.FC<VerifyIconProps> = ({ size = 20, className, style }) => {
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
        <path d="M22 20V4H2v16z" />
        <path strokeLinecap="square" strokeWidth="2" d="M22 20V4H2v16z" />
        <path
          strokeLinecap="square"
          strokeWidth="2"
          d="M6 10h2.5M6 14h2.5m4 1.5a3 3 0 0 1 3-3m0 0a3 3 0 0 1 3 3m-3-3a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
        />
      </g>
    </svg>
  );
};

export default VerifyIcon;
