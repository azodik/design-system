import React from "react";

interface SmartphoneIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SmartphoneIcon: React.FC<SmartphoneIconProps> = ({ size = 20, className, style }) => {
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
        d="M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m6 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
      />
    </svg>
  );
};

export default SmartphoneIcon;
