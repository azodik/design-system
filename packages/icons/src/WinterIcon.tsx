import React from "react";

interface WinterIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const WinterIcon: React.FC<WinterIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path
          strokeLinecap="round"
          d="M12 8V6m0-3v3m0 0L9 4m3 2l3-2m1 8h2m3 0h-3m0 0l2-3m-2 3l2 3m-8 1v2m0 3v-3m0 0l-3 2m3-2l3 2m-7-8H6m-3 0h3m0 0L4 9m2 3l-2 3"
        />
      </g>
    </svg>
  );
};

export default WinterIcon;
