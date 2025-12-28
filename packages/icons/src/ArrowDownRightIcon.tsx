import React from "react";

interface ArrowDownRightIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowDownRightIcon: React.FC<ArrowDownRightIconProps> = ({ size = 20, className, style }) => {
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
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
    </svg>
  );
};

export default ArrowDownRightIcon;
