import React from "react";

interface VolumeOffIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VolumeOffIcon: React.FC<VolumeOffIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path fill="currentColor" d="M2 7h4l5-4v14l-5-4H2z" />
    </svg>
  );
};

export default VolumeOffIcon;
