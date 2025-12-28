import React from "react";

interface UserIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UserIcon: React.FC<UserIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12ZM12 14C8.68629 14 6 16.6863 6 20V22H18V20C18 16.6863 15.3137 14 12 14Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UserIcon;
