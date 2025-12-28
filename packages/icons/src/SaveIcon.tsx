import React from "react";

interface SaveIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SaveIcon: React.FC<SaveIconProps> = ({ size = 20, className, style }) => {
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
        d="M18 21v-8H6v8H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13l4 4v13a1 1 0 0 1-1 1zm-2 0H8v-6h8z"
      />
    </svg>
  );
};

export default SaveIcon;
