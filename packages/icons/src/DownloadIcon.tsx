import React from "react";

interface DownloadIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M3 19h18v2H3zM13 9h7l-8 8l-8-8h7V1h2z" />
    </svg>
  );
};

export default DownloadIcon;
