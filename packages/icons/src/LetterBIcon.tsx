import React from "react";

interface LetterBIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LetterBIcon: React.FC<LetterBIconProps> = ({ size = 20, className, style }) => {
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
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
        <path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
      </g>
    </svg>
  );
};

export default LetterBIcon;
