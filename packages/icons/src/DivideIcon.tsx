import React from "react";

interface DivideIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DivideIcon: React.FC<DivideIconProps> = ({ size = 20, className, style }) => {
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
        d="M5 11h14v2H5zm7-3a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 11a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"
      />
    </svg>
  );
};

export default DivideIcon;
