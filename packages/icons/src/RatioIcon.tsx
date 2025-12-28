import React from "react";

interface RatioIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RatioIcon: React.FC<RatioIconProps> = ({ size = 20, className, style }) => {
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
        d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-3 9h-2v3h-3v2h5zm-7-5H6v5h2V9h3z"
      />
    </svg>
  );
};

export default RatioIcon;
