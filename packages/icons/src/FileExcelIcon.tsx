import React from "react";

interface FileExcelIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileExcelIcon: React.FC<FileExcelIconProps> = ({ size = 20, className, style }) => {
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
        d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-2.8 10L16 8h-2.4L12 10.286L10.4 8H8l2.8 4L8 16h2.4l1.6-2.286L13.6 16H16z"
      />
    </svg>
  );
};

export default FileExcelIcon;
