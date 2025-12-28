import React from "react";

interface BooleanIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BooleanIcon: React.FC<BooleanIconProps> = ({ size = 20, className, style }) => {
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
        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1m5 17a2 2 0 0 0 2-2m0-3.5v-2m0-3.5a2 2 0 0 0-2-2m-3.5 0h-2M11 9a2 2 0 0 0-2 2m0 3.5v2M9 20a2 2 0 0 0 2 2m3.5 0h2"
      />
    </svg>
  );
};

export default BooleanIcon;
