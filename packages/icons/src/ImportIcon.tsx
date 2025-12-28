import React from "react";

interface ImportIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ImportIcon: React.FC<ImportIconProps> = ({ size = 20, className, style }) => {
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
        d="M21 3H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-9 13a3 3 0 0 1-3-3H4V5h16v8h-5a3 3 0 0 1-3 3m4-7h-3V6h-2v3H8l4 4.5z"
      />
    </svg>
  );
};

export default ImportIcon;
