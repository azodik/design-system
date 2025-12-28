import React from "react";

interface MoveRightIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MoveRightIcon: React.FC<MoveRightIconProps> = ({ size = 20, className, style }) => {
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
      <path d="m18 8 4 4-4 4" />
      <path d="M2 12h20" />
    </svg>
  );
};

export default MoveRightIcon;
