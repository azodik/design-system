import React from "react";

interface FileSlidersIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileSlidersIcon: React.FC<FileSlidersIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M8 12h8" />
      <path d="M8 16h6" />
      <path d="M8 20h4" />
      <circle cx="18" cy="12" r="1" />
      <circle cx="16" cy="16" r="1" />
      <circle cx="14" cy="20" r="1" />
    </svg>
  );
};

export default FileSlidersIcon;
