import React from "react";

interface GlassesIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GlassesIcon: React.FC<GlassesIconProps> = ({ size = 20, className, style }) => {
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
      <path
        fill="currentColor"
        d="M1 12a5 5 0 0 1 8.192-3.848A4 4 0 0 1 12 7c1.095 0 2.086.44 2.808 1.152a5 5 0 1 1-1.264 1.578A2 2 0 0 0 12 9c-.62 0-1.177.283-1.544.73A5 5 0 1 1 1 12"
      />
    </svg>
  );
};

export default GlassesIcon;
