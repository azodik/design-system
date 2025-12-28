import React from "react";

interface OfficeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const OfficeIcon: React.FC<OfficeIconProps> = ({ size = 20, className, style }) => {
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
        d="M20.8 9H12v8h-1v4H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0zM14 11h9v7h-9zm-1 10h11v-2H13z"
      />
    </svg>
  );
};

export default OfficeIcon;
