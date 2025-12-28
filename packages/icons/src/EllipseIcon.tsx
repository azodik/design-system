import React from "react";

interface EllipseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const EllipseIcon: React.FC<EllipseIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M12 4C6.5 4 2 7.58 2 12s4.5 8 10 8s10-3.58 10-8s-4.5-8-10-8" />
    </svg>
  );
};

export default EllipseIcon;
