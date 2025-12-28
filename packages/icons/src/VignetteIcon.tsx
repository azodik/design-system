import React from "react";

interface VignetteIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VignetteIcon: React.FC<VignetteIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
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
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 88c0 30.93-32.24 56-72 56s-72-25.07-72-56s32.24-56 72-56s72 25.07 72 56"
      />
    </svg>
  );
};

export default VignetteIcon;
