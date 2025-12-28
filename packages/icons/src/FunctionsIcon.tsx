import React from "react";

interface FunctionsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FunctionsIcon: React.FC<FunctionsIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="m5 18l7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5z" />
    </svg>
  );
};

export default FunctionsIcon;
