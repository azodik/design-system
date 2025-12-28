import React from "react";

interface HealthIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HealthIcon: React.FC<HealthIconProps> = ({ size = 20, className, style }) => {
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
        d="M10.5 17h3v-2.5H16v-3h-2.5V9h-3v2.5H8v3h2.5zM4 21V9l8-6l8 6v12z"
      />
    </svg>
  );
};

export default HealthIcon;
