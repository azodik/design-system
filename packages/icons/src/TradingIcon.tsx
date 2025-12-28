import React from "react";

interface TradingIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TradingIcon: React.FC<TradingIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m30 8.254l13.5 31.492H32.247L24 21.754l-8.247 17.992H4.5L18 8.254z"
      />
    </svg>
  );
};

export default TradingIcon;
