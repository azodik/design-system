import React from "react";

interface CheckersIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CheckersIcon: React.FC<CheckersIconProps> = ({ size = 20, className, style }) => {
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
        d="M2 2v20h20V2zm18 10h-4v4h4v4h-4v-4h-4v4H8v-4H4v-4h4V8H4V4h4v4h4V4h4v4h4zm-4-4v4h-4V8zm-4 4v4H8v-4z"
      />
    </svg>
  );
};

export default CheckersIcon;
