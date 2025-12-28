import React from "react";

interface IconIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const IconIcon: React.FC<IconIconProps> = ({ size = 20, className, style }) => {
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
        <path d="M3 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0" />
        <path d="M9 3h12v12h-5c0-4.104-2.895-7-7-7z" />
        <path strokeWidth="2" d="M9 8V3h12v12h-5" />
        <path strokeWidth="2" d="M3 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0Z" />
      </g>
    </svg>
  );
};

export default IconIcon;
