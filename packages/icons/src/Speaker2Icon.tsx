import React from "react";

interface Speaker2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Speaker2Icon: React.FC<Speaker2IconProps> = ({ size = 20, className, style }) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" x2="12.01" y1="7" y2="7" />
    </svg>
  );
};

export default Speaker2Icon;
