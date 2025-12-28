import React from "react";

interface ArchiveXIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArchiveXIcon: React.FC<ArchiveXIconProps> = ({ size = 20, className, style }) => {
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
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="m9.5 12 5 5" />
      <path d="m14.5 12-5 5" />
    </svg>
  );
};

export default ArchiveXIcon;
