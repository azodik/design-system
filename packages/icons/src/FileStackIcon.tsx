import React from "react";

interface FileStackIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileStackIcon: React.FC<FileStackIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M16 2v5h5" />
      <path d="M21 6v12.5a1.5 1.5 0 0 1-3 0V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12.5a1.5 1.5 0 0 0 3 0V8" />
      <path d="M7 2v5h5" />
      <path d="M3 2.5a1.5 1.5 0 0 1 3 0v12a1.5 1.5 0 0 1-3 0Z" />
    </svg>
  );
};

export default FileStackIcon;
