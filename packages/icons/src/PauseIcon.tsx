import React from "react";

interface PauseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PauseIcon: React.FC<PauseIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M6 5h2v14H6zm10 0h2v14h-2z" />
    </svg>
  );
};

export default PauseIcon;
