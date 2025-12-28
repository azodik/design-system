import React from "react";

interface BluetoothOffIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BluetoothOffIcon: React.FC<BluetoothOffIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M17.5 17.5L12 23l-5.5-5.5M12 1l5.5 5.5L6.5 17.5" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
};

export default BluetoothOffIcon;
