import React from "react";

interface XIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const XIcon: React.FC<XIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
};

export default XIcon;
