import React from "react";

interface List2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const List2Icon: React.FC<List2IconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path fill="currentColor" d="M3 3v1h4V3M3 1v1h4V1M3 5v1h4V5M1 5v1h1V5M1 3v1h1V3M1 1v1h1V1" />
    </svg>
  );
};

export default List2Icon;
