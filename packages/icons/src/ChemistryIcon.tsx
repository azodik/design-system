import React from "react";

interface ChemistryIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ChemistryIcon: React.FC<ChemistryIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m11 7l2 3l-2 3H8l-2-3l2-3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16 4l2 3l-2 3h-3l-2-3l2-3zm0 12l2 3M5 4l3 3m0 6l-2 2m7 1l-2 2m-5-8H4m14 3h3m-5-3l2 3l-2 3h-3l-2-3l2-3z"
        />
        <circle cx="9" cy="20" r="1" fill="currentColor" />
        <circle cx="4" cy="17" r="1" fill="currentColor" />
        <circle cx="21" cy="7" r="1" fill="currentColor" />
      </g>
    </svg>
  );
};

export default ChemistryIcon;
