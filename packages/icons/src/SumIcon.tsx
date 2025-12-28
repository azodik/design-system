import React from "react";

interface SumIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SumIcon: React.FC<SumIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M15 3h2l5 2l-5 2v3.17L22 21H2l6-8l3.5 4.7l3.5-7.53z" />
    </svg>
  );
};

export default SumIcon;
