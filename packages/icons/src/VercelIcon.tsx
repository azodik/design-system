import React from "react";

interface VercelIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VercelIcon: React.FC<VercelIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M23 21.648H1L12 2.352z" />
    </svg>
  );
};

export default VercelIcon;
