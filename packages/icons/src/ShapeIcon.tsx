import React from "react";

interface ShapeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ShapeIcon: React.FC<ShapeIconProps> = ({ size = 20, className, style }) => {
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
        d="M5 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6m14 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6M5 22a3 3 0 1 1 0-6a3 3 0 0 1 0 6M9 4h6v2H9zm0 14h6v2H9zM4 9h2v6H4zm14 0h2v6h-2z"
      />
    </svg>
  );
};

export default ShapeIcon;
