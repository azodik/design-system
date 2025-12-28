import React from "react";

interface PentagonIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PentagonIcon: React.FC<PentagonIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="m12 .7l10.747 7.808l-4.105 12.634H5.358L1.253 8.508z" />
    </svg>
  );
};

export default PentagonIcon;
