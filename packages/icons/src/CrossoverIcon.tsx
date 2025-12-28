import React from "react";

interface CrossoverIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CrossoverIcon: React.FC<CrossoverIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
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
        d="M13.5 13.5L.5.5m0 4v-4h4M9 5L13.5.5m0 4v-4h-4M5 9L.5 13.5"
      />
    </svg>
  );
};

export default CrossoverIcon;
