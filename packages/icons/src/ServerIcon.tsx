import React from "react";

interface ServerIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ServerIcon: React.FC<ServerIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path
        fill="currentColor"
        d="M4 3h16a1 1 0 0 1 1 1v7H3V4a1 1 0 0 1 1-1M3 13h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 3v2h3v-2zM7 6v2h3V6z"
      />
    </svg>
  );
};

export default ServerIcon;
