import React from "react";

interface ForkIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ForkIcon: React.FC<ForkIconProps> = ({ size = 20, className, style }) => {
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
        d="M9 6a3 3 0 0 1-2 2.83V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17a3.001 3.001 0 1 1 2 0V9a4 4 0 0 1-4 4h-2v2.17a3.001 3.001 0 1 1-2 0V13H9a4 4 0 0 1-4-4v-.17A3.001 3.001 0 1 1 9 6"
      />
    </svg>
  );
};

export default ForkIcon;
