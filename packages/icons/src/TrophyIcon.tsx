import React from "react";

interface TrophyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TrophyIcon: React.FC<TrophyIconProps> = ({ size = 20, className, style }) => {
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
        d="M13.005 16.94v2.063h5v2h-12v-2h5V16.94a8 8 0 0 1-7-7.938v-6h16v6a8 8 0 0 1-7 7.938m-12-11.937h2v4h-2zm20 0h2v4h-2z"
      />
    </svg>
  );
};

export default TrophyIcon;
