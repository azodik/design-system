import React from "react";

interface FolderKanbanIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FolderKanbanIcon: React.FC<FolderKanbanIconProps> = ({ size = 20, className, style }) => {
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
      <rect x="7" y="9" width="3" height="8" />
      <rect x="11" y="11" width="3" height="6" />
      <rect x="15" y="13" width="3" height="4" />
    </svg>
  );
};

export default FolderKanbanIcon;
