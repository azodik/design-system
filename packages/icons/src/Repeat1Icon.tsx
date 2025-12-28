import React from "react";

interface Repeat1IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Repeat1Icon: React.FC<Repeat1IconProps> = ({ size = 20, className, style }) => {
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
      <path
        fill="currentColor"
        d="M3 7h4V4H6v2H3V5L1 6.5L3 8m0-4h1v1h1V3H4m3-1.5L5 0v1H1v3h1V2h3v1"
      />
    </svg>
  );
};

export default Repeat1Icon;
