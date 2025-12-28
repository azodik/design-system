import React from "react";

interface LessIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LessIcon: React.FC<LessIconProps> = ({ size = 20, className, style }) => {
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
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-28.65 136.74a8 8 0 1 1-6.7 14.52l-104-48a8 8 0 0 1 0-14.52l104-48a8 8 0 0 1 6.7 14.52L91.09 128Z"
      />
    </svg>
  );
};

export default LessIcon;
