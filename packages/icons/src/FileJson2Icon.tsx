import React from "react";

interface FileJson2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileJson2Icon: React.FC<FileJson2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M10 12a1.5 1.5 0 0 0-3 0c0 .4.2.7.5 1" />
      <path d="M14 12a1.5 1.5 0 0 0 3 0c0-.4-.2-.7-.5-1" />
      <path d="M10 18h.01" />
      <path d="M14 18h.01" />
    </svg>
  );
};

export default FileJson2Icon;
