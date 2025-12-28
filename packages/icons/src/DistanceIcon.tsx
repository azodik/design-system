import React from "react";

interface DistanceIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DistanceIcon: React.FC<DistanceIconProps> = ({ size = 20, className, style }) => {
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
        d="M11.39 10.39L7.5 14.277L3.61 10.39a5.5 5.5 0 1 1 7.78 0M7.5 8.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12.89 10.89l-3.89 3.888l-3.89-3.889a5.5 5.5 0 1 1 7.78 0M16.5 17.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
      />
    </svg>
  );
};

export default DistanceIcon;
