import React from "react";

interface UserRoundMinusIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UserRoundMinusIcon: React.FC<UserRoundMinusIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M2 21a8 8 0 0 1 13.292-6" />
      <circle cx="10" cy="8" r="5" />
      <line x1="16" x2="22" y1="11" y2="11" />
    </svg>
  );
};

export default UserRoundMinusIcon;
