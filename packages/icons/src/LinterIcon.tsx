import React from "react";

interface LinterIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LinterIcon: React.FC<LinterIconProps> = ({ size = 20, className, style }) => {
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
      <rect
        width="37"
        height="37"
        x="5.5"
        y="5.5"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="4"
        ry="4"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.289 42.233s1.654-24.985 24.913-24.985"
      />
      <circle
        cx="15.408"
        cy="16.158"
        r="5.653"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinterIcon;
