import React from "react";

interface PageIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PageIcon: React.FC<PageIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 21V3h2v18zm16 0V3h2v18zM7 13v-2h2v2zm4 8v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3h2v2zm4 8v-2h2v2z"
      />
    </svg>
  );
};

export default PageIcon;
