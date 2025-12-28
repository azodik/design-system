import React from "react";

interface PoundSignIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PoundSignIcon: React.FC<PoundSignIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 2v20" />
      <path d="M10 5c0-1.1.9-2 2-2s2 .9 2 2v5" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  );
};

export default PoundSignIcon;
