import React from "react";

interface MessageSquareDotsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MessageSquareDotsIcon: React.FC<MessageSquareDotsIconProps> = ({
  size = 20,
  className,
  style,
}) => {
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
      <circle cx="9" cy="10" r="1" />
      <circle cx="15" cy="10" r="1" />
      <circle cx="12" cy="10" r="1" />
    </svg>
  );
};

export default MessageSquareDotsIcon;
