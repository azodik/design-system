import React from "react";

interface SendIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SendIcon: React.FC<SendIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="m2 21l21-9L2 3v7l15 2l-15 2z" />
    </svg>
  );
};

export default SendIcon;
