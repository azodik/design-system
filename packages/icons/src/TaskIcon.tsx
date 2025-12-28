import React from "react";

interface TaskIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TaskIcon: React.FC<TaskIconProps> = ({ size = 20, className, style }) => {
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
        d="M21 3v18.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H20a1 1 0 0 1 1 1m-9.707 10.121l-2.475-2.475l-1.414 1.415l3.889 3.889l5.657-5.657l-1.414-1.414z"
      />
    </svg>
  );
};

export default TaskIcon;
