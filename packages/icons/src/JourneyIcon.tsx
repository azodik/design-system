import React from "react";

interface JourneyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const JourneyIcon: React.FC<JourneyIconProps> = ({ size = 20, className, style }) => {
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
          d="M24 40c8.284 0 15-6.716 15-15s-6.716-15-15-15S9 16.716 9 25s6.716 15 15 15"
        />
        <path d="M20 11c1.805 1.008 3.5 2.5 3.358 4.445c-.114 1.555-1.443 1.902-1.721 3.026s1.33 2.35-1.39 4.165C18.431 23.846 12.97 26.145 9 24" />
        <path
          strokeLinejoin="round"
          d="M9.5 24.5C6.5 26.388 2.068 31.521 4 35c2.5 4.5 12 .69 23-8S42.23 5.606 42.23 5.606L37 7"
        />
        <path d="M26 40s.5-5 4-8s8-3 8-3" />
      </g>
    </svg>
  );
};

export default JourneyIcon;
