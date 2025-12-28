import React from "react";

interface OptionsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const OptionsIcon: React.FC<OptionsIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h9m4 0h3m-9 8h9M4 16h3" />
        <circle cx="9" cy="16" r="2" />
        <circle cx="15" cy="8" r="2" />
      </g>
    </svg>
  );
};

export default OptionsIcon;
