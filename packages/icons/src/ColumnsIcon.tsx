import React from "react";

interface ColumnsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ColumnsIcon: React.FC<ColumnsIconProps> = ({ size = 20, className, style }) => {
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
        d="M120 48v160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16m72-16h-40a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"
      />
    </svg>
  );
};

export default ColumnsIcon;
