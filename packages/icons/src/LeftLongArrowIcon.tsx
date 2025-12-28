import React from "react";

interface LeftLongArrowIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LeftLongArrowIcon: React.FC<LeftLongArrowIconProps> = ({ size = 20, className, style }) => {
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
      <path d="m19 12-7-7" />
      <path d="M5 12h14" />
    </svg>
  );
};

export default LeftLongArrowIcon;
