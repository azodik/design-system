import React from "react";

interface SuitcaseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SuitcaseIcon: React.FC<SuitcaseIconProps> = ({ size = 20, className, style }) => {
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
        d="M15 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5V4a1 1 0 0 1 1-1zM8 8H6v11h2zm10 0h-2v11h2zm-4-3h-4v1h4z"
      />
    </svg>
  );
};

export default SuitcaseIcon;
