import React from "react";

interface MultiIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MultiIcon: React.FC<MultiIconProps> = ({ size = 20, className, style }) => {
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
        d="M6 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3zm2 3h9a1 1 0 0 1 1 1v7h2V5H8zm8 8.74V9H4v9.632l7.491-6.992zM7 13.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
      />
    </svg>
  );
};

export default MultiIcon;
