import React from "react";

interface DatabaseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DatabaseIcon: React.FC<DatabaseIconProps> = ({ size = 20, className, style }) => {
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
        d="M11 7V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-6 9v2h5v-2zm9 0v2h5v-2zm0-3v2h5v-2zm0-3v2h5v-2zm-9 3v2h5v-2z"
      />
    </svg>
  );
};

export default DatabaseIcon;
