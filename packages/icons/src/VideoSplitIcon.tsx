import React from "react";

interface VideoSplitIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VideoSplitIcon: React.FC<VideoSplitIconProps> = ({ size = 20, className, style }) => {
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
      <line x1="12" x2="12" y1="3" y2="21" />
    </svg>
  );
};

export default VideoSplitIcon;
