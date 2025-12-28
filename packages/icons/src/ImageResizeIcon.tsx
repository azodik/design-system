import React from "react";

interface ImageResizeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ImageResizeIcon: React.FC<ImageResizeIconProps> = ({ size = 20, className, style }) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      <path d="M21 3v6" />
      <path d="M21 15v6" />
      <path d="M3 21h6" />
      <path d="M15 21h6" />
    </svg>
  );
};

export default ImageResizeIcon;
