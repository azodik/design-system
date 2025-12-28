import React from "react";

interface SequentialIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SequentialIcon: React.FC<SequentialIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M3 5h18v4H3zm0 5h18v4H3zm0 5h18v4H3z" />
    </svg>
  );
};

export default SequentialIcon;
