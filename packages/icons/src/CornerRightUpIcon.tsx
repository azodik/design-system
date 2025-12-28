import React from "react";

interface CornerRightUpIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CornerRightUpIcon: React.FC<CornerRightUpIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M14 19H5v-2h7V9.414H6.586L13 3l6.414 6.414H14z" />
    </svg>
  );
};

export default CornerRightUpIcon;
