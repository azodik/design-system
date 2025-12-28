import React from "react";

interface FileType2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileType2Icon: React.FC<FileType2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M2 13v-1h6v1" />
      <path d="M4 18h2" />
      <path d="M5 12v6" />
    </svg>
  );
};

export default FileType2Icon;
