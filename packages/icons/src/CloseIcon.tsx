import React from "react";

interface CloseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CloseIcon: React.FC<CloseIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 10.5858L16.9497 5.63605L18.364 7.05026L13.4142 12L18.364 16.9497L16.9497 18.364L12 13.4142L7.05025 18.364L5.63604 16.9497L10.5858 12L5.63604 7.05025L7.05025 5.63604L12 10.5858Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CloseIcon;
