import React from "react";

interface FolderHeartIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FolderHeartIcon: React.FC<FolderHeartIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v4" />
      <circle cx="18" cy="16" r="3" />
      <path d="M20.2 20.2c1.227.074 1.3.937.6 1.4-.7.5-1.4.3-1.4-.8s.7-1.1 1.4-.8c.2.1.3.2.4.2Z" />
    </svg>
  );
};

export default FolderHeartIcon;
