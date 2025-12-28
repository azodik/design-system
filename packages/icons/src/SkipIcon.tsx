import React from "react";

interface SkipIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SkipIcon: React.FC<SkipIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M6 7h12v2H6zm6 4l-6 6h12z" />
    </svg>
  );
};

export default SkipIcon;
