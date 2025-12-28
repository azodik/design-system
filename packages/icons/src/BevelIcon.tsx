import React from "react";

interface BevelIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BevelIcon: React.FC<BevelIconProps> = ({ size = 20, className, style }) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6.586a1 1 0 0 1-.707-.293l-6.414-6.414A1 1 0 0 1 4 12.586V6a2 2 0 0 1 2-2"
      />
    </svg>
  );
};

export default BevelIcon;
