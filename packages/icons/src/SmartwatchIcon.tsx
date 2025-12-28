import React from "react";

interface SmartwatchIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SmartwatchIcon: React.FC<SmartwatchIconProps> = ({ size = 20, className, style }) => {
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
      <rect width="6" height="11" x="9" y="6" rx="1" />
      <path d="M9 12h6" />
      <rect width="12" height="18" x="6" y="3" rx="2" />
      <path d="M9 18v3" />
      <path d="M15 18v3" />
    </svg>
  );
};

export default SmartwatchIcon;
