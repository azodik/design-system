import React from "react";

interface RecoveryIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RecoveryIcon: React.FC<RecoveryIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" d="M3 12c0 1.657 3.582 3 8 3q.508 0 1-.023" />
        <path strokeLinecap="round" d="M19 5v6.5M3 5v14c0 1.657 3.582 3 8 3q.508 0 1-.023" />
        <ellipse cx="11" cy="5" rx="8" ry="3" />
        <path strokeLinecap="round" d="M7 8v2m0 5v2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.987 14l.5 2.084l-.83-.518a3.5 3.5 0 0 0-2.122-.715c-1.952 0-3.535 1.6-3.535 3.575C14 20.4 15.583 22 17.535 22c1.71 0 3.137-1.228 3.465-2.86"
        />
      </g>
    </svg>
  );
};

export default RecoveryIcon;
