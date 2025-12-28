import React from "react";

interface PointIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PointIcon: React.FC<PointIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7" />
    </svg>
  );
};

export default PointIcon;
