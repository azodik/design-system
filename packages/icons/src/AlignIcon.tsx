import React from "react";

interface AlignIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AlignIcon: React.FC<AlignIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M3 3h18v2H3zm5 8v10H6V11H3l4-4l4 4zm10 0v10h-2V11h-3l4-4l4 4z" />
    </svg>
  );
};

export default AlignIcon;
