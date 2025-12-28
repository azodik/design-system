import React from "react";

interface ArrowUpLeftIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowUpLeftIcon: React.FC<ArrowUpLeftIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M7 17V7h10" />
      <path d="M17 17 7 7" />
    </svg>
  );
};

export default ArrowUpLeftIcon;
