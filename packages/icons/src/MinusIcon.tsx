import React from "react";

interface MinusIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MinusIcon: React.FC<MinusIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M19 13H5v-2h14z" />
    </svg>
  );
};

export default MinusIcon;
