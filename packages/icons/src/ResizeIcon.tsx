import React from "react";

interface ResizeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ResizeIcon: React.FC<ResizeIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
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
        d="M144 120v88a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-88a8 8 0 0 1 8-8h88a8 8 0 0 1 8 8m64 56a8 8 0 0 0-8 8v16h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16v-16a8 8 0 0 0-8-8m0-72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-8-64h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16m-56 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16M48 88a8 8 0 0 0 8-8V56h16a8 8 0 0 0 0-16H56a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8"
      />
    </svg>
  );
};

export default ResizeIcon;
