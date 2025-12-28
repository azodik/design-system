import React from "react";

interface Clock5IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Clock5Icon: React.FC<Clock5IconProps> = ({ size = 20, className, style }) => {
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
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m2 15l-3-5.2V7h1.5v4.4l2.8 4.9z"
      />
    </svg>
  );
};

export default Clock5Icon;
