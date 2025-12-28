import React from "react";

interface LabelIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LabelIcon: React.FC<LabelIconProps> = ({ size = 20, className, style }) => {
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
        d="M16.52 6a2 2 0 0 1 1.561.75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624A2 2 0 0 1 16.52 18H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z"
      />
    </svg>
  );
};

export default LabelIcon;
