import React from "react";

interface OptimizeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const OptimizeIcon: React.FC<OptimizeIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinecap="round" strokeWidth="4">
        <path
          strokeLinejoin="round"
          d="m19 8l9 8l10.032-5.89L33 21l9 8l-12-1l-4.5 10L23 27l-12-1l10.508-6.35z"
        />
        <path d="M8 42.02L23 27" />
      </g>
    </svg>
  );
};

export default OptimizeIcon;
