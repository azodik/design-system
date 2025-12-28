import React from "react";

interface CloseAllIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CloseAllIcon: React.FC<CloseAllIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M5 13h14v-2H5m-2 6h14v-2H3m4-8v2h14V7" />
    </svg>
  );
};

export default CloseAllIcon;
