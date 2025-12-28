import React from "react";

interface MapPinPlusIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MapPinPlusIcon: React.FC<MapPinPlusIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" />
      <circle cx="12" cy="8" r="2" />
      <line x1="12" x2="12" y1="2" y2="6" />
      <line x1="10" x2="14" y1="4" y2="4" />
    </svg>
  );
};

export default MapPinPlusIcon;
