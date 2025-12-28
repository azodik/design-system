import React from "react";

interface SkipForwardIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SkipForwardIcon: React.FC<SkipForwardIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M8 12.4L2 16V4l6 3.6V4l8 4.8V4h2v12h-2v-4.8L8 16z" />
    </svg>
  );
};

export default SkipForwardIcon;
