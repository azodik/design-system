import React from "react";

interface PercentIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PercentIcon: React.FC<PercentIconProps> = ({ size = 20, className, style }) => {
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
        d="M17.505 21.003a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m-11-11a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m12.571-6.486l1.414 1.415L4.934 20.488L3.52 19.074z"
      />
    </svg>
  );
};

export default PercentIcon;
