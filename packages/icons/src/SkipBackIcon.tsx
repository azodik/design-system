import React from "react";

interface SkipBackIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SkipBackIcon: React.FC<SkipBackIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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
        d="m11.98 7.63l6-3.6v12l-6-3.6v3.6l-8-4.8v4.8h-2v-12h2v4.8l8-4.8z"
      />
    </svg>
  );
};

export default SkipBackIcon;
