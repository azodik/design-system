import React from "react";

interface Shuffle2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Shuffle2Icon: React.FC<Shuffle2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M18 18h-1.4a1.4 1.4 0 0 1-1.1-.5l-9.5-9.5a1.4 1.4 0 0 0-2 0l-4.6 4.6a1.4 1.4 0 0 1-2 0L2.7 9.7" />
      <path d="M22 18h-1.4a1.4 1.4 0 0 1-1.1-.5l-9.5-9.5a1.4 1.4 0 0 0-2 0l-4.6 4.6a1.4 1.4 0 0 1-2 0L2.7 9.7" />
      <path d="M18 2h4v4" />
      <path d="M22 2l-5 5" />
      <path d="M2 22l5-5" />
    </svg>
  );
};

export default Shuffle2Icon;
