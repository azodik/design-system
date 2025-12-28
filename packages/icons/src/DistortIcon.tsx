import React from "react";

interface DistortIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DistortIcon: React.FC<DistortIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M4 19v21h13M4 19V8h13M4 19s9-6 20 0s20 0 20 0m0 0V8H17m27 11v21H17M4 29s9-6 20 0s20 0 20 0M17 8s6 8 0 16s0 16 0 16M31 8s6 8 0 16s0 16 0 16"
      />
    </svg>
  );
};

export default DistortIcon;
