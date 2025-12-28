import React from "react";

interface ItalyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ItalyIcon: React.FC<ItalyIconProps> = ({ size = 20, className, style }) => {
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
        <path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" />
        <path fill="#6da544" d="M0 0h167v512H0z" />
        <path fill="#d80027" d="M345 0h167v512H345z" />
      </g>
    </svg>
  );
};

export default ItalyIcon;
