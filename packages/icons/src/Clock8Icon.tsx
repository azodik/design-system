import React from "react";

interface Clock8IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Clock8Icon: React.FC<Clock8IconProps> = ({ size = 20, className, style }) => {
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
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M7.7 15.5L7 14.2l4-2.3V7h1.5v5.8z"
      />
    </svg>
  );
};

export default Clock8Icon;
