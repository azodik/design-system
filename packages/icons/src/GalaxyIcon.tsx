import React from "react";

interface GalaxyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GalaxyIcon: React.FC<GalaxyIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M12 3q-2 1.5-2 4.5c0 3 2 4.5 2 4.5s2 1.5 2 4.5q0 3-2 4.5" />
        <path d="M19.794 16.5q-.3-2.482-2.897-3.982C14.3 11.018 12 12 12 12s-2.299.982-4.897-.518Q4.505 9.982 4.206 7.5" />
        <path d="M19.794 7.5q-2.299-.982-4.897.518C12.3 9.518 12 12 12 12s-.299 2.482-2.897 3.982q-2.598 1.5-4.897.518" />
      </g>
    </svg>
  );
};

export default GalaxyIcon;
