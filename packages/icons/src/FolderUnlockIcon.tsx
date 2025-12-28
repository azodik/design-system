import React from "react";

interface FolderUnlockIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FolderUnlockIcon: React.FC<FolderUnlockIconProps> = ({ size = 20, className, style }) => {
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
      <rect width="8" height="5" x="14" y="17" rx="1" />
      <path d="M15 17v-2a1 1 0 0 1 1-1h1" />
    </svg>
  );
};

export default FolderUnlockIcon;
