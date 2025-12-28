import React from "react";

interface BatteryChargingIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BatteryChargingIcon: React.FC<BatteryChargingIconProps> = ({
  size = 20,
  className,
  style,
}) => {
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
      <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1" />
      <path d="M6 11H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
      <path d="M11 7l-4 6h6l-4 6" />
      <path d="M22 11h-4" />
    </svg>
  );
};

export default BatteryChargingIcon;
