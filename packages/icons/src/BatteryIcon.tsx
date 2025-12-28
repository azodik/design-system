import React from "react";

interface BatteryIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BatteryIcon: React.FC<BatteryIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m18 4h2v6h-2z"
      />
    </svg>
  );
};

export default BatteryIcon;
