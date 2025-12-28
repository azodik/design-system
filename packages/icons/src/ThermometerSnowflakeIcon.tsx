import React from "react";

interface ThermometerSnowflakeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ThermometerSnowflakeIcon: React.FC<ThermometerSnowflakeIconProps> = ({
  size = 20,
  className,
  style,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="M2 12h10" />
      <path d="M9 4v16" />
      <path d="m3 9 3 3-3 3" />
      <path d="m12 6-3-3-3 3" />
      <path d="m6 18-3 3 3 3" />
      <path d="M22 12h-6" />
      <path d="M19 15l-3-3" />
      <path d="M19 9l-3 3" />
    </svg>
  );
};

export default ThermometerSnowflakeIcon;
