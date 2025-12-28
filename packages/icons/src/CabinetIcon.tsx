import React from "react";

interface CabinetIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CabinetIcon: React.FC<CabinetIconProps> = ({ size = 20, className, style }) => {
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
        d="M14 8h-4V6h4zm6-4v16c0 1.11-.89 2-2 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m-2 9H6v7h12zm0-9H6v7h12zm-4 11h-4v2h4z"
      />
    </svg>
  );
};

export default CabinetIcon;
