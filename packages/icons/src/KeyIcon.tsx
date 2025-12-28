import React from "react";

interface KeyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const KeyIcon: React.FC<KeyIconProps> = ({ size = 20, className, style }) => {
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
        d="M17 14h-4.341a6 6 0 1 1 0-4H23v4h-2v4h-4zM7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
      />
    </svg>
  );
};

export default KeyIcon;
