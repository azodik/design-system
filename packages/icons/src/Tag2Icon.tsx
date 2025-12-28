import React from "react";

interface Tag2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Tag2Icon: React.FC<Tag2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" x2="7.01" y1="7" y2="7" />
    </svg>
  );
};

export default Tag2Icon;
