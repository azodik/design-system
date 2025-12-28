import React from "react";

interface DevelopmentIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DevelopmentIcon: React.FC<DevelopmentIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
        d="M8 4v4H4V4zM2 2v8h8V2zm16 5v4h-4V7zm-6-2v8h8V5zM8 16v4H4v-4zm-6-2v8h8v-8z"
      />
      <path
        fill="currentColor"
        d="M22 10v6h-6v6h-6v8h20V10Zm-4 8h4v4h-4Zm-2 10h-4v-4h4Zm6 0h-4v-4h4Zm6 0h-4v-4h4Zm0-6h-4v-4h4Zm-4-6v-4h4v4Z"
      />
    </svg>
  );
};

export default DevelopmentIcon;
