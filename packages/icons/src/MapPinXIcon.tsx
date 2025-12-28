import React from "react";

interface MapPinXIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MapPinXIcon: React.FC<MapPinXIconProps> = ({ size = 20, className, style }) => {
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
      <line x1="9" x2="15" y1="11" y2="5" />
      <line x1="15" x2="9" y1="11" y2="5" />
    </svg>
  );
};

export default MapPinXIcon;
