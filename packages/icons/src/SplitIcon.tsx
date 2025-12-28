import React from "react";

interface SplitIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SplitIcon: React.FC<SplitIconProps> = ({ size = 20, className, style }) => {
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
        d="M17 7v2h5V7zM2 9v6h5V9zm10 0v2H9v2h3v2l3-3zm5 2v2h5v-2zm0 4v2h5v-2z"
      />
    </svg>
  );
};

export default SplitIcon;
