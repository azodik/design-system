import React from "react";

interface InboxIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const InboxIcon: React.FC<InboxIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m6 9a3 3 0 1 0 6 0h5V5H4v7z"
      />
    </svg>
  );
};

export default InboxIcon;
