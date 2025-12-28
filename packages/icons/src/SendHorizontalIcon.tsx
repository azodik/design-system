import React from "react";

interface SendHorizontalIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SendHorizontalIcon: React.FC<SendHorizontalIconProps> = ({ size = 20, className, style }) => {
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
      <path d="m3 3 10 9-10 9V3Z" />
      <path d="M14 12h7" />
      <path d="M21 9v6" />
    </svg>
  );
};

export default SendHorizontalIcon;
