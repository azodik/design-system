import React from "react";

interface RegulationIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RegulationIcon: React.FC<RegulationIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor">
        <path d="M22 3H2v14h20z" />
        <path strokeLinecap="square" strokeWidth="2" d="M4 21h16M2 3h20v14H2z" />
        <path
          strokeLinecap="square"
          strokeWidth="2"
          d="M8 7v2m8-2v2m0 3v1m-4-3v3m-4-1v1m4.004-6v.004H12V7z"
        />
      </g>
    </svg>
  );
};

export default RegulationIcon;
