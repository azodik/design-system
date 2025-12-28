import React from "react";

interface ImageOffIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ImageOffIcon: React.FC<ImageOffIconProps> = ({ size = 20, className, style }) => {
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
      <line x1="2" x2="22" y1="2" y2="22" />
      <path d="M10.5 10.5a2.5 2.5 0 0 0-3.5 0" />
      <path d="M21 15V5a2 2 0 0 0-2-2H5" />
      <path d="m3 3 18 18" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9" />
    </svg>
  );
};

export default ImageOffIcon;
