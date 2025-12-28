import React from "react";

interface UserMinusIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UserMinusIcon: React.FC<UserMinusIconProps> = ({ size = 20, className, style }) => {
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
        fill="currentColor"
        d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m11 5v2h-8v-2z"
      />
    </svg>
  );
};

export default UserMinusIcon;
