import React from "react";

interface RARIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RARIcon: React.FC<RARIconProps> = ({ size = 20, className, style }) => {
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
        d="M18 6.5H7.5a2 2 0 0 0-2 2v7.67a2 2 0 0 0 2 2H18m12 0h10.5a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2H30M18 18.17H7.5a2 2 0 0 0-2 2v7.66a2 2 0 0 0 2 2H18m12 0h10.5a2 2 0 0 0 2-2v-7.66a2 2 0 0 0-2-2H30"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 29.83H7.5a2 2 0 0 0-2 2v7.67a2 2 0 0 0 2 2H18m12 0h10.5a2 2 0 0 0 2-2v-7.67a2 2 0 0 0-2-2H30m-20.63-14v-7m0 18.67v-7m0 18.67v-7"
      />
      <rect
        width="12"
        height="39"
        x="18"
        y="4.5"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="1"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M30 15.33a6 6 0 1 0-12 0m0 .89h12v3.88H18z"
      />
    </svg>
  );
};

export default RARIcon;
