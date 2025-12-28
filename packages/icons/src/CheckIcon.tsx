import React from "react";

interface CheckIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CheckIcon: React.FC<CheckIconProps> = ({ size = 20, className, style }) => {
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
        d="M10 15.172L19.192 5.979L20.607 7.393L10 18L3.636 11.636L5.05 10.222L10 15.172Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CheckIcon;
