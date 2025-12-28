import React from "react";

interface CMAIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CMAIcon: React.FC<CMAIconProps> = ({ size = 20, className, style }) => {
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
        d="M42.5 18.5h-13v-13h-11v13h-13v11h13v13h11v-13h13z"
      />
    </svg>
  );
};

export default CMAIcon;
