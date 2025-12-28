import React from "react";

interface AlignLeftIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AlignLeftIcon: React.FC<AlignLeftIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M3 4h18v2H3zm0 15h14v2H3zm0-5h18v2H3zm0-5h14v2H3z" />
    </svg>
  );
};

export default AlignLeftIcon;
