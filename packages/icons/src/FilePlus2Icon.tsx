import React from "react";

interface FilePlus2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FilePlus2Icon: React.FC<FilePlus2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" x2="12" y1="18" y2="12" />
      <line x1="9" x2="15" y1="15" y2="15" />
    </svg>
  );
};

export default FilePlus2Icon;
