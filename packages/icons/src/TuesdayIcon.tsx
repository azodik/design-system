import React from "react";

interface TuesdayIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TuesdayIcon: React.FC<TuesdayIconProps> = ({ size = 20, className, style }) => {
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
        d="M7.937 5.5H23.62c9.081 0 16.444 7.31 16.444 16.326h0c0 8.62-6.75 15.754-15.414 16.294M15.95 5.5v32.652M24.649 5.5v32.652"
      />
      <circle
        cx="20.299"
        cy="38.151"
        r="4.349"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TuesdayIcon;
