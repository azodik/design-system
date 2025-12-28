import React from "react";

interface ReceiptYenIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptYenIcon: React.FC<ReceiptYenIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 7v7" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
      <path d="M9 7l3-3 3 3" />
    </svg>
  );
};

export default ReceiptYenIcon;
