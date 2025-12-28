import React from "react";

interface FileIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileIcon: React.FC<FileIconProps> = ({ size = 20, className, style }) => {
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
        d="m3 8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993zm7-4.5L4.5 9H10z"
      />
    </svg>
  );
};

export default FileIcon;
