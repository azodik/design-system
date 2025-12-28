import React from "react";

interface FileWarningIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileWarningIcon: React.FC<FileWarningIconProps> = ({ size = 20, className, style }) => {
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
        d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-5 13v2h2v-2zm0-8v6h2V7z"
      />
    </svg>
  );
};

export default FileWarningIcon;
