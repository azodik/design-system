import React from "react";

interface ShapesIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ShapesIcon: React.FC<ShapesIconProps> = ({ size = 20, className, style }) => {
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
        d="m12 1l6 10H6zm1 12.5h8v8h-8zM6.75 22a4.75 4.75 0 1 0 0-9.5a4.75 4.75 0 0 0 0 9.5"
      />
    </svg>
  );
};

export default ShapesIcon;
