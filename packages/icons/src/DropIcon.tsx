import React from "react";

interface DropIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DropIcon: React.FC<DropIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M5.636 6.633L12 .269l6.364 6.364a9 9 0 1 1-12.728 0" />
    </svg>
  );
};

export default DropIcon;
