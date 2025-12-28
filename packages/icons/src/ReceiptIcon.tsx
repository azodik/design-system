import React from "react";

interface ReceiptIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptIcon: React.FC<ReceiptIconProps> = ({ size = 20, className, style }) => {
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
        d="M9 4L6 2L3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2H7v2a1 1 0 1 1-2 0v-4h16V4l-3-2l-3 2l-3-2z"
      />
    </svg>
  );
};

export default ReceiptIcon;
