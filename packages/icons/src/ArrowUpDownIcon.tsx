import React from "react";

interface ArrowUpDownIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowUpDownIcon: React.FC<ArrowUpDownIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M12 8H8.001L8 20H6V8H2l5-5zm10 8l-5 5l-5-5h4V4h2v12z" />
    </svg>
  );
};

export default ArrowUpDownIcon;
