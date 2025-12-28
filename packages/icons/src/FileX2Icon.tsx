import React from "react";

interface FileX2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileX2Icon: React.FC<FileX2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9.5" x2="14.5" y1="12.5" y2="17.5" />
      <line x1="14.5" x2="9.5" y1="12.5" y2="17.5" />
    </svg>
  );
};

export default FileX2Icon;
