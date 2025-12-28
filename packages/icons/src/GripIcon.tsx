import React from "react";

interface GripIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GripIcon: React.FC<GripIconProps> = ({ size = 20, className, style }) => {
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
        d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
      />
    </svg>
  );
};

export default GripIcon;
