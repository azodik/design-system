import React from "react";

interface ReceiptPoundIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptPoundIcon: React.FC<ReceiptPoundIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M8 12h5" />
      <path d="M10 16h3" />
      <path d="M8 16h1" />
      <path d="M13 8c-1.5 0-3 .5-3 2s1.5 2 3 2" />
    </svg>
  );
};

export default ReceiptPoundIcon;
