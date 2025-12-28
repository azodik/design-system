import React from "react";

interface RightIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RightIcon: React.FC<RightIconProps> = ({ size = 20, className, style }) => {
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
        d="M17 8v8l4.5-4zm-5 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
      />
    </svg>
  );
};

export default RightIcon;
