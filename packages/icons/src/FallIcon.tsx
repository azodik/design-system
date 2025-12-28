import React from "react";

interface FallIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FallIcon: React.FC<FallIconProps> = ({ size = 20, className, style }) => {
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
        d="m11 21l1-5l-1-4l-3-4h4l3-3M6 16l-1-4l3-4M5 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m8.5 7H16l4 2"
      />
    </svg>
  );
};

export default FallIcon;
