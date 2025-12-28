import React from "react";

interface CloudXIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CloudXIcon: React.FC<CloudXIconProps> = ({ size = 20, className, style }) => {
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
      <line x1="9" x2="15" y1="12" y2="12" />
    </svg>
  );
};

export default CloudXIcon;
