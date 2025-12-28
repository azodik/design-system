import React from "react";

interface OvenIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const OvenIcon: React.FC<OvenIconProps> = ({ size = 20, className, style }) => {
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
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-36 24a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-44 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-44 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12m108 136H64v-88h128Z"
      />
    </svg>
  );
};

export default OvenIcon;
