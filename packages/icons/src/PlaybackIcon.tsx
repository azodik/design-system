import React from "react";

interface PlaybackIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PlaybackIcon: React.FC<PlaybackIconProps> = ({ size = 20, className, style }) => {
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
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M41.288 31.273C43.32 29.173 44.5 26.677 44.5 24c0-7.47-9.178-13.526-20.5-13.526S3.5 16.53 3.5 24S12.678 37.526 24 37.526"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m24.115 34.462l4.907 2.899l-4.907 2.899z"
      />
    </svg>
  );
};

export default PlaybackIcon;
