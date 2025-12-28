import React from "react";

interface FriendIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FriendIcon: React.FC<FriendIconProps> = ({ size = 20, className, style }) => {
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
        d="M15 3v4.5H9v4h6v5H9V21h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
      />
    </svg>
  );
};

export default FriendIcon;
