import React from "react";

interface FileCogIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileCogIcon: React.FC<FileCogIconProps> = ({ size = 20, className, style }) => {
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
      <circle cx="12" cy="18" r="2" />
      <path d="M12 14v1" />
      <path d="M12 21v1" />
      <path d="M15.19 20.81l.7.7" />
      <path d="M8.53 20.81l-.7.7" />
      <path d="M15.19 15.19l.7-.7" />
      <path d="M8.53 15.19l-.7-.7" />
    </svg>
  );
};

export default FileCogIcon;
