import React from "react";

interface VMIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VMIcon: React.FC<VMIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
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
        d="M11 5h14v3h2V5a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v6.85h2Z"
        className="clr-i-outline clr-i-outline-path-1"
      />
      <path
        fill="currentColor"
        d="M30 10H17v2h8v6h2v-6h3v14h-8v-9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3h8a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M6 31V17h14v9h-4v-6h-2v6a2 2 0 0 0 2 2h4v3Z"
        className="clr-i-outline clr-i-outline-path-2"
      />
      <path fill="currentColor" d="M0 0h36v36H0z" />
    </svg>
  );
};

export default VMIcon;
