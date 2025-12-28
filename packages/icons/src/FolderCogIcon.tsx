import React from "react";

interface FolderCogIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FolderCogIcon: React.FC<FolderCogIconProps> = ({ size = 20, className, style }) => {
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
      <circle cx="18" cy="18" r="3" />
      <path d="M18 14v1" />
      <path d="M18 21v1" />
      <path d="M21.66 19.66l-1.41 1.41" />
      <path d="M16.75 20.25 15.34 21.66" />
      <path d="M14 18h1" />
      <path d="M21 18h1" />
      <path d="M19.66 16.34l-1.41-1.41" />
      <path d="M19.66 21.66l-1.41-1.41" />
      <path d="M16.34 19.66l-1.41-1.41" />
    </svg>
  );
};

export default FolderCogIcon;
