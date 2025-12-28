import React from "react";

interface ChevronsUpIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ChevronsUpIcon: React.FC<ChevronsUpIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="m17 18-5-5-5 5" />
      <path d="m17 11-5-5-5 5" />
    </svg>
  );
};

export default ChevronsUpIcon;
