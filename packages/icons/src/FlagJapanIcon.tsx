import React from "react";

interface FlagJapanIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FlagJapanIcon: React.FC<FlagJapanIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
      style={style}
    >
      <mask id="SVGuywqVbel">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#SVGuywqVbel)">
        <path fill="#eee" d="M0 0h512v512H0z" />
        <circle cx="256" cy="256" r="111.3" fill="#d80027" />
      </g>
    </svg>
  );
};

export default FlagJapanIcon;
