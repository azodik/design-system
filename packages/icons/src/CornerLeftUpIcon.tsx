import React from "react";

interface CornerLeftUpIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CornerLeftUpIcon: React.FC<CornerLeftUpIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M10 19h9v-2h-7V9.414h5.414L11 3L4.586 9.414H10z" />
    </svg>
  );
};

export default CornerLeftUpIcon;
