import React from "react";

interface EasingIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const EasingIcon: React.FC<EasingIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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
        strokeWidth="2"
        d="M3 3v16a2 2 0 0 0 2 2h16M7 11h8m-8 5h3M7 6h12"
      />
    </svg>
  );
};

export default EasingIcon;
