import React from "react";

interface FileTextIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileTextIcon: React.FC<FileTextIconProps> = ({ size = 20, className, style }) => {
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
        d="M21 9v11.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 0 0 1 1zm0-2h-5V2.003zM8 7v2h3V7zm0 4v2h8v-2zm0 4v2h8v-2z"
      />
    </svg>
  );
};

export default FileTextIcon;
