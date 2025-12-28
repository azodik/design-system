import React from "react";

interface RemoveIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RemoveIcon: React.FC<RemoveIconProps> = ({ size = 20, className, style }) => {
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
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
};

export default RemoveIcon;
