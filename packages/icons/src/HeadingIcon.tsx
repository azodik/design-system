import React from "react";

interface HeadingIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HeadingIcon: React.FC<HeadingIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z" />
    </svg>
  );
};

export default HeadingIcon;
