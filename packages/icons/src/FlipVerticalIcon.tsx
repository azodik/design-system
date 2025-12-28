import React from "react";

interface FlipVerticalIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FlipVerticalIcon: React.FC<FlipVerticalIconProps> = ({ size = 20, className, style }) => {
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
        d="M22 11H2v2h20zm-4-4H6V4h12zm2-3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-2 11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"
      />
    </svg>
  );
};

export default FlipVerticalIcon;
