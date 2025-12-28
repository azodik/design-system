import React from "react";

interface MapIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MapIcon: React.FC<MapIconProps> = ({ size = 20, className, style }) => {
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
        d="m2 5l7-3l6 3l6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46z"
      />
    </svg>
  );
};

export default MapIcon;
