import React from "react";

interface ImageCropIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ImageCropIcon: React.FC<ImageCropIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M21 3v6h-6" />
      <path d="M3 21h6v-6" />
      <path d="M21 3l-9 9" />
      <path d="M3 21l9-9" />
      <path d="M9 3H3v6" />
      <path d="M21 15v6h-6" />
    </svg>
  );
};

export default ImageCropIcon;
