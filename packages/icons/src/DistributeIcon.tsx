import React from "react";

interface DistributeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DistributeIcon: React.FC<DistributeIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M2 22v-2h20v2zm5-8.5v-3h10v3zM2 4V2h20v2z" />
    </svg>
  );
};

export default DistributeIcon;
