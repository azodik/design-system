import React from "react";

interface BeakerIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BeakerIcon: React.FC<BeakerIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 3v2a2 2 0 0 1 2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 1 2-2V3zm4 6h3v1H7zm0 2h3v1H7zm3 5H7v-1h3zm2-2H7v-1h5zm0-6H7V7h5z"
      />
    </svg>
  );
};

export default BeakerIcon;
