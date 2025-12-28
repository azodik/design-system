import React from "react";

interface DisplacementIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DisplacementIcon: React.FC<DisplacementIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <g fill="currentColor">
        <path d="M16 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M16 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0m0 0h11m0 0l-4-4m4 4l-4 4"
        />
        <path d="M32 38a5 5 0 1 0 10 0a5 5 0 0 0-10 0" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M32 38a5 5 0 1 0 10 0a5 5 0 0 0-10 0m0 0H21m0 0l4-4m-4 4l4 4"
        />
        <path d="M33 11a5 5 0 1 0 10 0a5 5 0 0 0-10 0" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M38 16a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0 0v11m0 0l4-4m-4 4l-4-4"
        />
        <path d="M5 37a5 5 0 1 1 10 0a5 5 0 0 1-10 0" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M10 32a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 0V21m0 0l4 4m-4-4l-4 4"
        />
      </g>
    </svg>
  );
};

export default DisplacementIcon;
