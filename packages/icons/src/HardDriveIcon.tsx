import React from "react";

interface HardDriveIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HardDriveIcon: React.FC<HardDriveIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <g fill="currentColor" fillRule="evenodd" transform="rotate(-90 10 8)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.5.5h4l5.788 2.48A2 2 0 0 1 13.5 4.82v7.362a2 2 0 0 1-1.212 1.838L6.5 16.5h-4a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2"
        />
        <circle cx="4" cy="3" r="1" fill="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 1v15" />
      </g>
    </svg>
  );
};

export default HardDriveIcon;
