import React from "react";

interface ServerCogIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ServerCogIcon: React.FC<ServerCogIconProps> = ({ size = 20, className, style }) => {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
      <circle cx="19" cy="6" r="1" />
      <path d="M19 6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1" />
    </svg>
  );
};

export default ServerCogIcon;
