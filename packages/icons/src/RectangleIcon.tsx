import React from "react";

interface RectangleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RectangleIcon: React.FC<RectangleIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
      />
    </svg>
  );
};

export default RectangleIcon;
