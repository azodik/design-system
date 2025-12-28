import React from "react";

interface CloudCheckIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CloudCheckIcon: React.FC<CloudCheckIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.26A8 8 0 1 0 4 16.29" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
};

export default CloudCheckIcon;
