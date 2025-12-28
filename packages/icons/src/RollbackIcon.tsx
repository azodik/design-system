import React from "react";

interface RollbackIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RollbackIcon: React.FC<RollbackIconProps> = ({ size = 20, className, style }) => {
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
        strokeLinecap="square"
        strokeWidth="2"
        d="M5.75 7H14a6 6 0 0 1 0 12H6.5M8 10.5L4.5 7L8 3.5"
      />
    </svg>
  );
};

export default RollbackIcon;
