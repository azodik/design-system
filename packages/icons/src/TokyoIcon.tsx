import React from "react";

interface TokyoIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TokyoIcon: React.FC<TokyoIconProps> = ({ size = 20, className, style }) => {
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
        d="M9 6v5H7V7H5v4H3V9H1v12h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2V9h-2v2h-2V7h-2v4h-2V6h-2v5h-2V6zm-6 7h2v4H3zm4 0h2v4H7zm4 0h2v4h-2zm4 0h2v4h-2zm4 0h2v4h-2z"
      />
    </svg>
  );
};

export default TokyoIcon;
