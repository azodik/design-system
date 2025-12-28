import React from "react";

interface IndiaIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const IndiaIcon: React.FC<IndiaIconProps> = ({ size = 20, className, style }) => {
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
        <path fill="#eee" d="m0 160l256-32l256 32v192l-256 32L0 352z" />
        <path fill="#ff9811" d="M0 0h512v160H0Z" />
        <path fill="#6da544" d="M0 352h512v160H0Z" />
        <circle cx="256" cy="256" r="72" fill="#0052b4" />
        <circle cx="256" cy="256" r="48" fill="#eee" />
        <circle cx="256" cy="256" r="24" fill="#0052b4" />
      </g>
    </svg>
  );
};

export default IndiaIcon;
