import React from "react";

interface HypervolumeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HypervolumeIcon: React.FC<HypervolumeIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
    </svg>
  );
};

export default HypervolumeIcon;
