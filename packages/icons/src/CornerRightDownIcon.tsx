import React from "react";

interface CornerRightDownIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CornerRightDownIcon: React.FC<CornerRightDownIconProps> = ({
  size = 20,
  className,
  style,
}) => {
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
      <path fill="currentColor" d="M14 5H5v2h7v7.586H6.586L13 21l6.414-6.414H14z" />
    </svg>
  );
};

export default CornerRightDownIcon;
