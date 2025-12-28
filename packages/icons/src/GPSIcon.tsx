import React from "react";

interface GPSIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GPSIcon: React.FC<GPSIconProps> = ({ size = 20, className, style }) => {
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
        d="m12 16l3 6H9zm-2.627.255a5 5 0 1 1 5.255 0l-1.356-2.711a2 2 0 1 0-2.544 0zm-2.241 4.482A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-5.131 8.737l-1.344-2.688a7 7 0 1 0-7.05 0z"
      />
    </svg>
  );
};

export default GPSIcon;
