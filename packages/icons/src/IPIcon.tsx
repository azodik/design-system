import React from "react";

interface IPIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const IPIcon: React.FC<IPIconProps> = ({ size = 20, className, style }) => {
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
        d="M16 11h-2V9h2zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm7 2H8v10h2zm2 10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4z"
      />
    </svg>
  );
};

export default IPIcon;
