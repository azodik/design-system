import React from "react";

interface HybridIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HybridIcon: React.FC<HybridIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path fill="currentColor" d="M17 24.184V20h-2v4.184a3 3 0 1 0 2 0" />
      <path
        fill="currentColor"
        d="M26 12a3.996 3.996 0 0 0-3.858 3H9.858a4 4 0 1 0 0 2h12.284A3.993 3.993 0 1 0 26 12M6 18a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m20 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2"
      />
      <path fill="currentColor" d="M19 5a3 3 0 1 0-4 2.816V12h2V7.816A2.99 2.99 0 0 0 19 5" />
    </svg>
  );
};

export default HybridIcon;
