import React from "react";

interface ColorIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ColorIcon: React.FC<ColorIconProps> = ({ size = 20, className, style }) => {
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
        d="M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154zm-.8-2L12 5.885L9.554 12zM3 20h18v2H3z"
      />
    </svg>
  );
};

export default ColorIcon;
