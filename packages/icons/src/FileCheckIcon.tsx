import React from "react";

interface FileCheckIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileCheckIcon: React.FC<FileCheckIconProps> = ({ size = 20, className, style }) => {
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
        d="m21 7l-5-5H3.999A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h8.348A6 6 0 0 1 21 14.803zm-6.535 12.465L18 23l4.95-4.95l-1.414-1.414L18 20.172l-2.12-2.122z"
      />
    </svg>
  );
};

export default FileCheckIcon;
