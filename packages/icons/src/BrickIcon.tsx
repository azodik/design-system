import React from "react";

interface BrickIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BrickIcon: React.FC<BrickIconProps> = ({ size = 20, className, style }) => {
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
        d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h18V6Z"
      />
    </svg>
  );
};

export default BrickIcon;
