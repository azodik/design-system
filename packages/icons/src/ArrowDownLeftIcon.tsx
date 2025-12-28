import React from "react";

interface ArrowDownLeftIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowDownLeftIcon: React.FC<ArrowDownLeftIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M17 7H7v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
};

export default ArrowDownLeftIcon;
