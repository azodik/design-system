import React from "react";

interface UnderlineIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UnderlineIcon: React.FC<UnderlineIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M8 3v9a4 4 0 0 0 8 0V3h2v9a6 6 0 0 1-12 0V3zM4 20h16v2H4z" />
    </svg>
  );
};

export default UnderlineIcon;
