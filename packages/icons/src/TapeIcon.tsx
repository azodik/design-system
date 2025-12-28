import React from "react";

interface TapeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TapeIcon: React.FC<TapeIconProps> = ({ size = 20, className, style }) => {
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
        d="M10.83 13A3 3 0 1 0 8 15h8a3 3 0 1 0-2.83-2zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m13 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-8 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
      />
    </svg>
  );
};

export default TapeIcon;
