import React from "react";

interface UserPenIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UserPenIcon: React.FC<UserPenIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m16 11 2 2 4-4" />
      <path d="m22 11-4.586 4.586a2 2 0 0 1-2.828 0L14 14" />
    </svg>
  );
};

export default UserPenIcon;
