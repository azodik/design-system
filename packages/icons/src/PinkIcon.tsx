import React from "react";

interface PinkIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PinkIcon: React.FC<PinkIconProps> = ({ size = 20, className, style }) => {
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
      <circle cx="12" cy="12" r="10" fill="#ff69b4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};

export default PinkIcon;
