import React from "react";

interface TieIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TieIcon: React.FC<TieIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="m6 2l4 4l-3 11l5 5l5-5l-3-11l4-4Z" />
    </svg>
  );
};

export default TieIcon;
