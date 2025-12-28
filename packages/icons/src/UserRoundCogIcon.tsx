import React from "react";

interface UserRoundCogIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UserRoundCogIcon: React.FC<UserRoundCogIconProps> = ({ size = 20, className, style }) => {
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
      <circle cx="18" cy="18" r="3" />
      <path d="M18 14v1" />
      <path d="M18 21v1" />
      <path d="M21.727 16.772l-1-1.732" />
      <path d="M17.928 22.772l-1-1.732" />
      <path d="M14.272 16.772l1-1.732" />
      <path d="M18.072 13.228l1-1.732" />
      <path d="M16.15 19l-1.732-1" />
      <path d="M20.15 19l-1.732-1" />
      <path d="M16.15 17l-1.732 1" />
      <path d="M20.15 17l-1.732 1" />
    </svg>
  );
};

export default UserRoundCogIcon;
