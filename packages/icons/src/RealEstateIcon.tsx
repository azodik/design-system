import React from "react";

interface RealEstateIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RealEstateIcon: React.FC<RealEstateIconProps> = ({ size = 20, className, style }) => {
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
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 8h8v8H8z" />
    </svg>
  );
};

export default RealEstateIcon;
