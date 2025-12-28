import React from "react";

interface CloudHailIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CloudHailIcon: React.FC<CloudHailIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M16 14v2" />
      <path d="M16 20h.01" />
      <path d="M20 16h.01" />
      <path d="M20 20h.01" />
      <path d="M12 16h.01" />
      <path d="M12 20h.01" />
      <path d="M12 12h.01" />
    </svg>
  );
};

export default CloudHailIcon;
