import React from "react";

interface ForwardIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ForwardIcon: React.FC<ForwardIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M12 8V4l8 8l-8 8v-4H4V8z" />
    </svg>
  );
};

export default ForwardIcon;
