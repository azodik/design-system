import React from "react";

interface ArrowIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M5 12H19M12 5L19 12L12 19" />
    </svg>
  );
};

export default ArrowIcon;
