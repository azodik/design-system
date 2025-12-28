import React from "react";

interface LeaderIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LeaderIcon: React.FC<LeaderIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M2 21V9h5.5v12zm7.25 0V3h5.5v18zm7.25 0V11H22v10z" />
    </svg>
  );
};

export default LeaderIcon;
