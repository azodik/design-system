import React from "react";

interface Mic2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Mic2Icon: React.FC<Mic2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="m12 1-3 3v5a3 3 0 0 0 6 0V4z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="23" />
      <line x1="8" x2="16" y1="23" y2="23" />
    </svg>
  );
};

export default Mic2Icon;
