import React from "react";

interface Message2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Message2Icon: React.FC<Message2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
      <path d="M12 22V12" />
    </svg>
  );
};

export default Message2Icon;
