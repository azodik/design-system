import React from "react";

interface SevenIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SevenIcon: React.FC<SevenIconProps> = ({ size = 20, className, style }) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.5 17c0-3.75 5-10 5-10s-3.75.625-6.25 0"
      />
    </svg>
  );
};

export default SevenIcon;
