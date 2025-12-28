import React from "react";

interface CloudSunIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CloudSunIcon: React.FC<CloudSunIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 2v2" />
      <path d="M12 18v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M18 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M22 12h-1.34" />
      <path d="M13 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
};

export default CloudSunIcon;
