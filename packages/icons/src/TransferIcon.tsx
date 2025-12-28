import React from "react";

interface TransferIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TransferIcon: React.FC<TransferIconProps> = ({ size = 20, className, style }) => {
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
        d="M8 4a2 2 0 0 0-2 2v4h2V6h8v3h-2.5l3.5 3.5L20.5 9H18V6a2 2 0 0 0-2-2zm-5 8v2h8v-2zm0 3v2h8v-2zm10 0v2h8v-2zM3 18v2h8v-2zm10 0v2h8v-2z"
      />
    </svg>
  );
};

export default TransferIcon;
