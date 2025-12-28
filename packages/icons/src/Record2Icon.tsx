import React from "react";

interface Record2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Record2Icon: React.FC<Record2IconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor">
        <path d="M8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
        <path d="M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
      </g>
    </svg>
  );
};

export default Record2Icon;
