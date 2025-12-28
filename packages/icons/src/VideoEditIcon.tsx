import React from "react";

interface VideoEditIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VideoEditIcon: React.FC<VideoEditIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
      <path d="m22 8-6 4 6 4V8Z" />
      <path d="m18 14 2 2 4-4" />
    </svg>
  );
};

export default VideoEditIcon;
