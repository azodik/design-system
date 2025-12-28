import React from "react";

interface HexagonIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HexagonIcon: React.FC<HexagonIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5z" />
    </svg>
  );
};

export default HexagonIcon;
