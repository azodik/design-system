import React from "react";

interface DualIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DualIcon: React.FC<DualIconProps> = ({ size = 20, className, style }) => {
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
        d="m15 2l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-2 6h-3v2h1v6h2z"
      />
    </svg>
  );
};

export default DualIcon;
