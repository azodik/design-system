import React from "react";

interface ExclusiveIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ExclusiveIcon: React.FC<ExclusiveIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeWidth="4">
        <path
          strokeLinejoin="round"
          d="M22.8 4.201L4.413 22.586a2 2 0 0 0 0 2.828L22.8 43.8a2 2 0 0 0 2.829 0l18.384-18.385a2 2 0 0 0 0-2.828L25.628 4.2a2 2 0 0 0-2.829 0Z"
        />
        <path strokeLinecap="round" d="m18.043 29.987l12-11.962m-11.99-.009l11.98 11.98" />
      </g>
    </svg>
  );
};

export default ExclusiveIcon;
