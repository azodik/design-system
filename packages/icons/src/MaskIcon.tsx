import React from "react";

interface MaskIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MaskIcon: React.FC<MaskIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      </g>
    </svg>
  );
};

export default MaskIcon;
