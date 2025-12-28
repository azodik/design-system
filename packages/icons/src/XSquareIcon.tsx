import React from "react";

interface XSquareIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const XSquareIcon: React.FC<XSquareIconProps> = ({ size = 20, className, style }) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="9" x2="15" y1="9" y2="15" />
      <line x1="15" x2="9" y1="9" y2="15" />
    </svg>
  );
};

export default XSquareIcon;
