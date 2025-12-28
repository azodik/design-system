import React from "react";

interface OpenIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const OpenIcon: React.FC<OpenIconProps> = ({ size = 20, className, style }) => {
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
        d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"
      />
    </svg>
  );
};

export default OpenIcon;
