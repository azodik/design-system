import React from "react";

interface RiverIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RiverIcon: React.FC<RiverIconProps> = ({ size = 20, className, style }) => {
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
        d="M18 1.83c-.5 0-1 .17-1.41.58L8 11l1.5 1.5L6 16H4l-2 4l2 2l4-2v-2l3.5-3.5L13 16l8.59-8.59c.62-.91.78-2.04 0-2.82l-2.18-2.18A1.95 1.95 0 0 0 18 1.83M18 4l2 2l-7 7l-2-2z"
      />
    </svg>
  );
};

export default RiverIcon;
