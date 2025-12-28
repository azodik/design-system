import React from "react";

interface MapPinIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MapPinIcon: React.FC<MapPinIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinejoin="round" strokeWidth="4">
        <path d="M8 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM42 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" />
        <path strokeLinecap="round" d="M32 6H20v36h12M12 24h20" />
      </g>
    </svg>
  );
};

export default MapPinIcon;
