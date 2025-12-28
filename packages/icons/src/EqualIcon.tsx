import React from "react";

interface EqualIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const EqualIcon: React.FC<EqualIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M19 8H5v2h14zm0 6H5v2h14z" />
    </svg>
  );
};

export default EqualIcon;
