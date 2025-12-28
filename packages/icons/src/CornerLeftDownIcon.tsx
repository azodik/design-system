import React from "react";

interface CornerLeftDownIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CornerLeftDownIcon: React.FC<CornerLeftDownIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M10 5h9v2h-7v7.586h5.414L11 21l-6.414-6.414H10z" />
    </svg>
  );
};

export default CornerLeftDownIcon;
