import React from "react";

interface Clock6IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Clock6Icon: React.FC<Clock6IconProps> = ({ size = 20, className, style }) => {
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
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m.5 15H11V7h1.5z"
      />
    </svg>
  );
};

export default Clock6Icon;
