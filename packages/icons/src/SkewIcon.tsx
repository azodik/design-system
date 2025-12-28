import React from "react";

interface SkewIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SkewIcon: React.FC<SkewIconProps> = ({ size = 20, className, style }) => {
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
        d="m17.5 11l-2.09 9H10.5l2.09-9zM20 9h-9L8 22h9zM4 6l4-4v3h8v2H8v3z"
      />
    </svg>
  );
};

export default SkewIcon;
