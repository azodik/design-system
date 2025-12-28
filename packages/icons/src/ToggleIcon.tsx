import React from "react";

interface ToggleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ToggleIcon: React.FC<ToggleIconProps> = ({ size = 20, className, style }) => {
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
        d="M8 5h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m8 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
      />
    </svg>
  );
};

export default ToggleIcon;
