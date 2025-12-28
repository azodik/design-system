import React from "react";

interface CommitIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CommitIcon: React.FC<CommitIconProps> = ({ size = 20, className, style }) => {
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
        d="M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2z"
      />
    </svg>
  );
};

export default CommitIcon;
