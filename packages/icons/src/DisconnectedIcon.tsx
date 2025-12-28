import React from "react";

interface DisconnectedIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DisconnectedIcon: React.FC<DisconnectedIconProps> = ({ size = 20, className, style }) => {
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
        d="M16 9v2H8V9h2V8H4v2H2V2h2v2h8a2 2 0 0 1 2 2v3zm-6 6v3a2 2 0 0 0 2 2h8v2h2v-8h-2v2h-6v-1h2v-2H8v2z"
      />
    </svg>
  );
};

export default DisconnectedIcon;
