import React from "react";

interface SpaceIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SpaceIcon: React.FC<SpaceIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M4 9v4h16V9h2v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9z" />
    </svg>
  );
};

export default SpaceIcon;
