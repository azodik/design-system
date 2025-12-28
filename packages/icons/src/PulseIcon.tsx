import React from "react";

interface PulseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PulseIcon: React.FC<PulseIconProps> = ({ size = 20, className, style }) => {
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
        d="m9 7.539l6 14L18.66 13H23v-2h-5.66L15 16.461l-6-14L5.34 11H1v2h5.66z"
      />
    </svg>
  );
};

export default PulseIcon;
