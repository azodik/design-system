import React from "react";

interface MapPinOffIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MapPinOffIcon: React.FC<MapPinOffIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5.07" />
      <path d="M19.18 13.52A8.66 8.66 0 0 0 20 10c0-6-8-12-8-12a29.94 29.94 0 0 0-2.79 3.38" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
};

export default MapPinOffIcon;
