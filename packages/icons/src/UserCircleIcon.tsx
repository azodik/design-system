import React from "react";

interface UserCircleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UserCircleIcon: React.FC<UserCircleIconProps> = ({ size = 20, className, style }) => {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  );
};

export default UserCircleIcon;
