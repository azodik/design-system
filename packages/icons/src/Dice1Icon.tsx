import React from "react";

interface Dice1IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Dice1Icon: React.FC<Dice1IconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path fill="currentColor" d="M3 3h1v1H3M0 7h7V0H0" />
    </svg>
  );
};

export default Dice1Icon;
