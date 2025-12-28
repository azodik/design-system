import React from "react";

interface ShieldOffIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ShieldOffIcon: React.FC<ShieldOffIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5a1 1 0 0 0-1-1h-2.22a1 1 0 0 0-.33.06l-1.47.51a1 1 0 0 1-.66 0L12.4 4.06a1.07 1.07 0 0 0-.8 0L9.6 4.57a1 1 0 0 1-.66 0L7.55 4.06a1 1 0 0 0-.33-.06H5a1 1 0 0 0-1 1v7a6.9 6.9 0 0 0 .31 2" />
      <path d="M4 14c0 5 3.5 7.5 7.66 8.95a1 1 0 0 0 .67-.01c.21-.07.42-.15.62-.26" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
};

export default ShieldOffIcon;
