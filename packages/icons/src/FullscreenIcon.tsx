import React from "react";

interface FullscreenIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FullscreenIcon: React.FC<FullscreenIconProps> = ({ size = 20, className, style }) => {
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
        d="M16 3h6v6h-2V5h-4zM2 3h6v2H4v4H2zm18 16v-4h2v6h-6v-2zM4 19h4v2H2v-6h2z"
      />
    </svg>
  );
};

export default FullscreenIcon;
