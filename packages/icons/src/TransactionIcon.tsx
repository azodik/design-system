import React from "react";

interface TransactionIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TransactionIcon: React.FC<TransactionIconProps> = ({ size = 20, className, style }) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 16h6m-6-4l3 4.5m3-4.5l-3 4.5V21m-3-2h6M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1"
      />
    </svg>
  );
};

export default TransactionIcon;
