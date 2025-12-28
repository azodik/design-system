import React from "react";

interface UploadIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UploadIcon: React.FC<UploadIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M3 19h18v2H3zm10-9v8h-2v-8H4l8-8l8 8z" />
    </svg>
  );
};

export default UploadIcon;
