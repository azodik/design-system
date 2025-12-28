import React from "react";

interface PurpleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PurpleIcon: React.FC<PurpleIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path fill="currentColor" d="M5 17h62v38H5z" />
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 17h62v38H5z"
      />
    </svg>
  );
};

export default PurpleIcon;
