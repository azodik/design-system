import React from "react";

interface FileCodeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileCodeIcon: React.FC<FileCodeIconProps> = ({ size = 20, className, style }) => {
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
        d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm1.657 10L14.12 8.464L12.707 9.88L14.828 12l-2.12 2.121l1.413 1.415zM6.343 12l3.536 3.536l1.414-1.415L9.172 12l2.12-2.121L9.88 8.464z"
      />
    </svg>
  );
};

export default FileCodeIcon;
