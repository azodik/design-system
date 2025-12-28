import React from "react";

interface CloudRainIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CloudRainIcon: React.FC<CloudRainIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="m16 14 2 2" />
      <path d="m16 20 2 2" />
      <path d="m12 16 2 2" />
      <path d="m12 22 2 2" />
    </svg>
  );
};

export default CloudRainIcon;
