import React from "react";

interface EndpointIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const EndpointIcon: React.FC<EndpointIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path d="M42 24H26" />
        <circle cx="22" cy="24" r="3" />
        <path d="M42 40H22c-8.837 0-16-7.163-16-16S13.163 8 22 8h20" />
      </g>
    </svg>
  );
};

export default EndpointIcon;
