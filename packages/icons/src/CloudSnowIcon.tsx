import React from "react";

interface CloudSnowIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CloudSnowIcon: React.FC<CloudSnowIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M8 15h.01" />
      <path d="M8 19h.01" />
      <path d="M12 17h.01" />
      <path d="M12 21h.01" />
      <path d="M16 15h.01" />
      <path d="M16 19h.01" />
    </svg>
  );
};

export default CloudSnowIcon;
