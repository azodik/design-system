import React from "react";

interface TabletIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TabletIcon: React.FC<TabletIconProps> = ({ size = 20, className, style }) => {
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
        d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m7 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
      />
    </svg>
  );
};

export default TabletIcon;
