import React from "react";

interface FolderKeyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FolderKeyIcon: React.FC<FolderKeyIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5" />
      <circle cx="16" cy="20" r="2" />
      <path d="m22 16-4.5-4.5" />
      <path d="M21 11h-4" />
    </svg>
  );
};

export default FolderKeyIcon;
