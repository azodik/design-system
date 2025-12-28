import React from "react";

interface DollarIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DollarIcon: React.FC<DollarIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M9 5c0-1.1.9-2 2-2s2 .9 2 2v2M9 19c0 1.1.9 2 2 2s2-.9 2-2v-2" />
      <path d="M9 11h6M9 13h6" />
    </svg>
  );
};

export default DollarIcon;
