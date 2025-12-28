import React from "react";

interface LockIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LockIcon: React.FC<LockIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 2C14.7614 2 17 4.23858 17 7V9H19C19.5523 9 20 9.44772 20 10V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V10C4 9.44772 4.44772 9 5 9H7V7C7 4.23858 9.23858 2 12 2ZM18 11H6V20H18V11ZM12 13C12.8284 13 13.5 13.6716 13.5 14.5C13.5 15.3284 12.8284 16 12 16C11.1716 16 10.5 15.3284 10.5 14.5C10.5 13.6716 11.1716 13 12 13ZM12 4C10.3431 4 9 5.34315 9 7V9H15V7C15 5.34315 13.6569 4 12 4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LockIcon;
