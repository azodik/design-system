import React from "react";

interface ShardIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ShardIcon: React.FC<ShardIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M5.134 7.031L8 12.764l2.866-5.733L8 2.016zM8 0l4 7l-4 8l-4-8z" />
    </svg>
  );
};

export default ShardIcon;
