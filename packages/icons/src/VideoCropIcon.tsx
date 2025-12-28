import React from "react";

interface VideoCropIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VideoCropIcon: React.FC<VideoCropIconProps> = ({ size = 20, className, style }) => {
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
        d="M43.5 12.572v23.316l-8.627-9.127v8.601a1.935 1.935 0 0 1-1.93 1.94H6.439a1.935 1.935 0 0 1-1.939-1.93V12.637c0-1.074.865-1.94 1.939-1.94h26.496c1.074 0 1.939.866 1.939 1.94v9.06z"
      />
    </svg>
  );
};

export default VideoCropIcon;
