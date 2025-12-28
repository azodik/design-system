import React from "react";

interface CornerDownLeftIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CornerDownLeftIcon: React.FC<CornerDownLeftIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M19 14V5h-2v7H9.414V6.586L3 13l6.414 6.414V14z" />
    </svg>
  );
};

export default CornerDownLeftIcon;
