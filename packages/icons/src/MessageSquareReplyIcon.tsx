import React from "react";

interface MessageSquareReplyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MessageSquareReplyIcon: React.FC<MessageSquareReplyIconProps> = ({
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
      <path d="m10 7-3 3 3 3" />
      <path d="M17 13v-1a2 2 0 0 0-2-2H7" />
    </svg>
  );
};

export default MessageSquareReplyIcon;
