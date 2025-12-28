import React from "react";

interface SdCardIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SdCardIcon: React.FC<SdCardIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path fill="currentColor" d="M6 1v2h1V1M2 2v2h1V2m1-1v2h1V1M1 8V2l2-2h5v8" />
    </svg>
  );
};

export default SdCardIcon;
