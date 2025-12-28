import React from "react";

interface MessageSquareXIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MessageSquareXIcon: React.FC<MessageSquareXIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" x2="15" y1="9" y2="15" />
      <line x1="15" x2="9" y1="9" y2="15" />
    </svg>
  );
};

export default MessageSquareXIcon;
