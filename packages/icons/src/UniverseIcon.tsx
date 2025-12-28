import React from "react";

interface UniverseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UniverseIcon: React.FC<UniverseIconProps> = ({ size = 20, className, style }) => {
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
        <path d="M7.027 11.477a5 5 0 1 0 5.496-4.45a4.95 4.95 0 0 0-3.088.681" />
        <path d="M5.636 5.636a9 9 0 1 0 3.555-2.188" />
        <path d="M17 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-6 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-3 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
      </g>
    </svg>
  );
};

export default UniverseIcon;
