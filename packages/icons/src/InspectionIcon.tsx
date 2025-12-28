import React from "react";

interface InspectionIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const InspectionIcon: React.FC<InspectionIconProps> = ({ size = 20, className, style }) => {
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01" />
      </g>
    </svg>
  );
};

export default InspectionIcon;
