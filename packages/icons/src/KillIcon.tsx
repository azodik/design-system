import React from "react";

interface KillIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const KillIcon: React.FC<KillIconProps> = ({ size = 20, className, style }) => {
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
        d="M42.48 34a1 1 0 0 0 1-1V11.39a1 1 0 0 0-1-1h-37a1 1 0 0 0-1 1V33a1 1 0 0 0 1 1Zm-19.59-3.48v-7.25H19l6.11-9.44v7.24H29ZM24 33.97v3.66m-7.43 0h14.86"
      />
    </svg>
  );
};

export default KillIcon;
