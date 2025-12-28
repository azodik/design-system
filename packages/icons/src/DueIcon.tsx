import React from "react";

interface DueIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DueIcon: React.FC<DueIconProps> = ({ size = 20, className, style }) => {
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
        <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16" />
        <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
      </g>
    </svg>
  );
};

export default DueIcon;
