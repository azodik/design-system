import React from "react";

interface FullscreenExitIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FullscreenExitIcon: React.FC<FullscreenExitIconProps> = ({ size = 20, className, style }) => {
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
        d="M18 7h4v2h-6V3h2zM8 9H2V7h4V3h2zm10 8v4h-2v-6h6v2zM8 15v6H6v-4H2v-2z"
      />
    </svg>
  );
};

export default FullscreenExitIcon;
