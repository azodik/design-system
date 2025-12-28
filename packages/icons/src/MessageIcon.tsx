import React from "react";

interface MessageIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MessageIcon: React.FC<MessageIconProps> = ({ size = 20, className, style }) => {
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
        d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM8 10v2h8v-2z"
      />
    </svg>
  );
};

export default MessageIcon;
