import React from "react";

interface FileSymlinkIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileSymlinkIcon: React.FC<FileSymlinkIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10 18h3" />
      <path d="m14 14-4 4 4 4" />
    </svg>
  );
};

export default FileSymlinkIcon;
