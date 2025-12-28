import React from "react";

interface RigIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RigIcon: React.FC<RigIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M10 17V7l5 5z" />
    </svg>
  );
};

export default RigIcon;
