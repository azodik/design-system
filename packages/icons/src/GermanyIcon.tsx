import React from "react";

interface GermanyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GermanyIcon: React.FC<GermanyIconProps> = ({ size = 20, className, style }) => {
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
        <path fill="#ffda44" d="m0 345l256.7-25.5L512 345v167H0z" />
        <path fill="#d80027" d="m0 167l255-23l257 23v178H0z" />
        <path fill="#333" d="M0 0h512v167H0z" />
      </g>
    </svg>
  );
};

export default GermanyIcon;
