import React from "react";

interface Menu2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Menu2Icon: React.FC<Menu2IconProps> = ({ size = 20, className, style }) => {
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
        d="M14 4H2V3h12zm0 4.5H2v-1h12zm0 4.5H2v-1h12z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Menu2Icon;
