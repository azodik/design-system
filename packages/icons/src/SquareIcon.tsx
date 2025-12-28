import React from "react";

interface SquareIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SquareIcon: React.FC<SquareIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M3 21V3h18v18z" />
    </svg>
  );
};

export default SquareIcon;
