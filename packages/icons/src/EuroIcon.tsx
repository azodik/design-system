import React from "react";

interface EuroIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const EuroIcon: React.FC<EuroIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M9 6c2-1 5-1 7 0M9 18c2 1 5 1 7 0" />
      <path d="M9 10h5M9 14h5" />
    </svg>
  );
};

export default EuroIcon;
