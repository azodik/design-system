import React from "react";

interface ArrayIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrayIcon: React.FC<ArrayIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm3 1v12h4v-2H8V8h2V6zm10 10h-2v2h4V6h-4v2h2z"
      />
    </svg>
  );
};

export default ArrayIcon;
