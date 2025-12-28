import React from "react";

interface FolderXIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FolderXIcon: React.FC<FolderXIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 6.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <line x1="9.5" x2="14.5" y1="14.5" y2="19.5" />
      <line x1="14.5" x2="9.5" y1="14.5" y2="19.5" />
    </svg>
  );
};

export default FolderXIcon;
