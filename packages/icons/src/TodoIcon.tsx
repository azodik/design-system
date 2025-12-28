import React from "react";

interface TodoIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TodoIcon: React.FC<TodoIconProps> = ({ size = 20, className, style }) => {
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
        d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zM7 8v2h10V8zm0 4v2h10v-2z"
      />
    </svg>
  );
};

export default TodoIcon;
