import React from "react";

interface MenuIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MenuIcon: React.FC<MenuIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="currentColor" />
    </svg>
  );
};

export default MenuIcon;
