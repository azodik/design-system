import React from "react";

interface DotsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DotsIcon: React.FC<DotsIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
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
        d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M68 168a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m60 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m60 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
      />
    </svg>
  );
};

export default DotsIcon;
