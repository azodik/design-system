import React from "react";

interface WoodIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const WoodIcon: React.FC<WoodIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M6 5.5a6 2.5 0 1 0 12 0a6 2.5 0 1 0-12 0" />
        <path d="M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097.108L18 14v4c0 1.61-2.54 2.925-5.725 3H12c-3.314 0-6-1.343-6-3v-2l-1.586-1.586A1.414 1.414 0 0 1 6 12.127V5.5m4 7V14m4 2v1" />
      </g>
    </svg>
  );
};

export default WoodIcon;
