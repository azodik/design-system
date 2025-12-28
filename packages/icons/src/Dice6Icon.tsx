import React from "react";

interface Dice6IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Dice6Icon: React.FC<Dice6IconProps> = ({ size = 20, className, style }) => {
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
      <path
        fill="currentColor"
        d="M2 5h1v1H2m2-1h1v1H4M2 3h1v1H2m2-1h1v1H4m0-3h1v1H4M2 1h1v1H2M0 7h7V0H0"
      />
    </svg>
  );
};

export default Dice6Icon;
