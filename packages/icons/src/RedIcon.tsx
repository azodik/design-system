import React from "react";

interface RedIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RedIcon: React.FC<RedIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path fill="currentColor" d="M100 60.234V10.322L74.999 47.28z" />
      <path fill="currentColor" d="m100 125.001l57.34-29.893l-25.002-36.958L100 75z" />
      <path fill="currentColor" d="M100 10.322v49.912l25.001-12.954z" />
      <path fill="currentColor" d="M100 139.766v49.912l89.678-46.65l-25.001-36.959z" />
      <path
        fill="currentColor"
        d="M100 139.766L35.323 106.07l-25.001 36.958L100 189.678zm0-14.765V75L67.662 58.15L42.66 95.108z"
      />
    </svg>
  );
};

export default RedIcon;
