import React from "react";

interface CollapseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CollapseIcon: React.FC<CollapseIconProps> = ({ size = 20, className, style }) => {
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
        d="M14 4H4v10H2V4a2 2 0 0 1 2-2h10zm4 2H8a2 2 0 0 0-2 2v10h2V8h10zm4 6v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m-2 3h-8v2h8z"
      />
    </svg>
  );
};

export default CollapseIcon;
