import React from "react";

interface NoteIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const NoteIcon: React.FC<NoteIconProps> = ({ size = 20, className, style }) => {
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
        d="M14 10V4.5l5.5 5.5M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-6-6z"
      />
    </svg>
  );
};

export default NoteIcon;
