import React from "react";

interface Dice2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Dice2Icon: React.FC<Dice2IconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M1 5h1v1H1m4-5h1v1H5M0 7h7V0H0" />
    </svg>
  );
};

export default Dice2Icon;
