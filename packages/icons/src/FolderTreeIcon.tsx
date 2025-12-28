import React from "react";

interface FolderTreeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FolderTreeIcon: React.FC<FolderTreeIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M13 10h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-4.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 8.93 2H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h7" />
      <path d="M13 21h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 8.93 13H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h7" />
    </svg>
  );
};

export default FolderTreeIcon;
