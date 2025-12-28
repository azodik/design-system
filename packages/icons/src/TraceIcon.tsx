import React from "react";

interface TraceIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TraceIcon: React.FC<TraceIconProps> = ({ size = 20, className, style }) => {
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
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8h4M5 8v8m5-4h2a2 2 0 1 0 0-4h-2v8m4 0l-3-4m6 4v-6a2 2 0 1 1 4 0v6m-4-3h4"
      />
    </svg>
  );
};

export default TraceIcon;
