import React from "react";

interface AlignRightIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AlignRightIcon: React.FC<AlignRightIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M3 4h18v2H3zm4 15h14v2H7zm-4-5h18v2H3zm4-5h14v2H7z" />
    </svg>
  );
};

export default AlignRightIcon;
