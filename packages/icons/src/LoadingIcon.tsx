import React from "react";

interface LoadingIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8" />
    </svg>
  );
};

export default LoadingIcon;
