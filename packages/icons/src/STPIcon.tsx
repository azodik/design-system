import React from "react";

interface STPIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const STPIcon: React.FC<STPIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M19.313 3H12l-7.312 9H12zm0 9H12l-7.312 9H12z" />
    </svg>
  );
};

export default STPIcon;
