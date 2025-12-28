import React from "react";

interface UserX2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UserX2Icon: React.FC<UserX2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M14 19a6 6 0 0 0-12 0" />
      <circle cx="20" cy="8" r="2" />
      <line x1="18" x2="22" y1="6" y2="10" />
      <line x1="22" x2="18" y1="6" y2="10" />
    </svg>
  );
};

export default UserX2Icon;
