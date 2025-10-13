import React from "react";

interface ChevronDownSmallIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ChevronDownSmallIcon: React.FC<ChevronDownSmallIconProps> = ({
  size = 12,
  className,
  style,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      style={style}
    >
      <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"></path>
    </svg>
  );
};

export default ChevronDownSmallIcon;
