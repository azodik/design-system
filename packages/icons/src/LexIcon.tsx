import React from "react";

interface LexIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LexIcon: React.FC<LexIconProps> = ({ size = 20, className, style }) => {
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
        d="M4 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm4.56 4h3.5l3.44 6l-3.44 6h-3.5L12 12z"
      />
    </svg>
  );
};

export default LexIcon;
