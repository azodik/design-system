import React from "react";

interface ForceIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ForceIcon: React.FC<ForceIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M1.5 21L12 3.5L22.5 21zM12 21l5-9H7z" />
    </svg>
  );
};

export default ForceIcon;
