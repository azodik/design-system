import React from "react";

interface ExecutionIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ExecutionIcon: React.FC<ExecutionIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path fill="currentColor" d="M20 11V9h-8v14h8v-2h-6v-4h5v-2h-5v-4z" />
    </svg>
  );
};

export default ExecutionIcon;
