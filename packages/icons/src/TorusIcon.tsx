import React from "react";

interface TorusIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TorusIcon: React.FC<TorusIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <ellipse cx="12" cy="11" rx="3" ry="2" />
        <ellipse cx="12" cy="12.5" rx="10" ry="8.5" />
      </g>
    </svg>
  );
};

export default TorusIcon;
