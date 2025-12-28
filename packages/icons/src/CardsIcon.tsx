import React from "react";

interface CardsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CardsIcon: React.FC<CardsIconProps> = ({ size = 20, className, style }) => {
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
        d="M200 88v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m16-48H64a8 8 0 0 0 0 16h152v120a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16"
      />
    </svg>
  );
};

export default CardsIcon;
