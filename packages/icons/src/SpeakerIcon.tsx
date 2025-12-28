import React from "react";

interface SpeakerIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SpeakerIcon: React.FC<SpeakerIconProps> = ({ size = 20, className, style }) => {
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
        d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 18a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
      />
    </svg>
  );
};

export default SpeakerIcon;
