import React from "react";

interface BrightnessIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BrightnessIcon: React.FC<BrightnessIconProps> = ({ size = 20, className, style }) => {
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
        d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M8 5.072A8 8 0 0 0 12.001 20L12 4a8 8 0 0 0-4 1.072"
      />
    </svg>
  );
};

export default BrightnessIcon;
