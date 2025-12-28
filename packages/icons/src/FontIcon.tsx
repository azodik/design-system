import React from "react";

interface FontIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FontIcon: React.FC<FontIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M6 4h13v2H8v6h10v2H8v7H6z" />
    </svg>
  );
};

export default FontIcon;
