import React from "react";

interface MoveDownIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MoveDownIcon: React.FC<MoveDownIconProps> = ({ size = 20, className, style }) => {
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
      <path d="m8 18 4 4 4-4" />
      <path d="M12 2v20" />
    </svg>
  );
};

export default MoveDownIcon;
