import React from "react";

interface ViewListIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ViewListIcon: React.FC<ViewListIconProps> = ({ size = 20, className, style }) => {
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
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M68 188a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m124 92h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16"
      />
    </svg>
  );
};

export default ViewListIcon;
