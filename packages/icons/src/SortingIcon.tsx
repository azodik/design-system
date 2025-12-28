import React from "react";

interface SortingIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SortingIcon: React.FC<SortingIconProps> = ({ size = 20, className, style }) => {
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
        d="M11.29 10.21a1 1 0 0 0 1.42 0l3-3a1 1 0 1 0-1.42-1.42L12 8.09l-2.29-2.3a1 1 0 0 0-1.42 1.42Zm1.42 4.58a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 1.42 1.42l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
      />
    </svg>
  );
};

export default SortingIcon;
