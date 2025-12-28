import React from "react";

interface HueIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HueIcon: React.FC<HueIconProps> = ({ size = 20, className, style }) => {
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
        d="M19.25 37.45v-6.17s-8-7.44-8-15.86S18.11 4.5 24 4.5S36.81 7 36.81 15.42s-8.06 15.86-8.06 15.86v6.17m-9.5 0h9.5l-9.5 6.05h9.5"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m30.03 18.61l-6.71-6.71l1.36 12.06l-6.71-6.72"
      />
    </svg>
  );
};

export default HueIcon;
