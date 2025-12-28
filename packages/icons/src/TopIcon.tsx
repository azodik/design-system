import React from "react";

interface TopIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TopIcon: React.FC<TopIconProps> = ({ size = 20, className, style }) => {
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
        fillRule="evenodd"
        d="M14 3H2V2h12zM7.979 4.008l4.484 4.484l-.707.707l-3.277-3.277v7.984h-1V5.922L4.2 9.199l-.707-.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default TopIcon;
