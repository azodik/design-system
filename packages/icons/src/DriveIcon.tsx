import React from "react";

interface DriveIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DriveIcon: React.FC<DriveIconProps> = ({ size = 20, className, style }) => {
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
        d="m7.94 4.146l3.482 6.03l-5.94 10.293L2 14.44zm2.176 10.294H22l-3.482 6.029H6.635zm4.343-1L8.518 3.145h6.964l5.94 10.295z"
      />
    </svg>
  );
};

export default DriveIcon;
