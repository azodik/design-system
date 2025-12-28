import React from "react";

interface ReplyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReplyIcon: React.FC<ReplyIconProps> = ({ size = 20, className, style }) => {
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
        d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10q0 .41-.032.81A9 9 0 0 0 13 15h-2z"
      />
    </svg>
  );
};

export default ReplyIcon;
