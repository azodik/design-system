import React from "react";

interface ZeroIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ZeroIcon: React.FC<ZeroIconProps> = ({ size = 20, className, style }) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 20h.01"
      />
    </svg>
  );
};

export default ZeroIcon;
