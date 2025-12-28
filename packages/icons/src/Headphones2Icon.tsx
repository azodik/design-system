import React from "react";

interface Headphones2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Headphones2Icon: React.FC<Headphones2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05" />
      <line x1="12" x2="12" y1="22.08" y2="12" />
      <path d="M7 13h10" />
      <path d="M7 17h7" />
    </svg>
  );
};

export default Headphones2Icon;
