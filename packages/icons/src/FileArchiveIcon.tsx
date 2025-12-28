import React from "react";

interface FileArchiveIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileArchiveIcon: React.FC<FileArchiveIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M4 12v8a2 2 0 0 0 2 2h2" />
      <path d="M10 12h4" />
      <path d="M10 16h4" />
      <path d="M10 20h4" />
    </svg>
  );
};

export default FileArchiveIcon;
