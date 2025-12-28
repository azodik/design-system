import React from "react";

interface LetterIIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LetterIIcon: React.FC<LetterIIconProps> = ({ size = 20, className, style }) => {
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
      <text
        x="12"
        y="16"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="bold"
        textAnchor="middle"
      >
        I
      </text>
    </svg>
  );
};

export default LetterIIcon;
