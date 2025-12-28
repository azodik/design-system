import React from "react";

interface PlatformIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ size = 20, className, style }) => {
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
        d="m12 20.175l5.6-3.425q-1.25-.875-2.675-1.312T12 15t-2.937.438t-2.713 1.287zM12 13q1.45 0 2.475-1.025T15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13m0 9.5L3 17V7l9-5.5L21 7v10z"
      />
    </svg>
  );
};

export default PlatformIcon;
