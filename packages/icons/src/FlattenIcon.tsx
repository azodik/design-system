import React from "react";

interface FlattenIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FlattenIcon: React.FC<FlattenIconProps> = ({ size = 20, className, style }) => {
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
        d="M11 2h2v8h2v2h-2v2h-2v-2H9v-2h2zm-2 8H7V8h2zm6 0V8h2v2zm5 6H4v2h16zm-4 4H8v2h8z"
      />
    </svg>
  );
};

export default FlattenIcon;
