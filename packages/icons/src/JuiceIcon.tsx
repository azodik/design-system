import React from "react";

interface JuiceIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const JuiceIcon: React.FC<JuiceIconProps> = ({ size = 20, className, style }) => {
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 24h18l-1.8 20H16.8z" />
        <rect width="26" height="6" x="11" y="18" rx="3" />
        <path d="M24 8c-5.523 0-10 4.477-10 10h20c0-5.523-4.477-10-10-10Z" />
        <path strokeLinecap="round" d="m28 4l-2 4" />
      </g>
    </svg>
  );
};

export default JuiceIcon;
