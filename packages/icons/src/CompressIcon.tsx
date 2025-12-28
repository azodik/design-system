import React from "react";

interface CompressIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CompressIcon: React.FC<CompressIconProps> = ({ size = 20, className, style }) => {
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
      <path d="m21 8-5-5-5 5" />
      <path d="M21 3v5h-5" />
      <path d="M3 16l5 5 5-5" />
      <path d="M3 21v-5h5" />
    </svg>
  );
};

export default CompressIcon;
