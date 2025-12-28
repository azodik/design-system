import React from "react";

interface PauseCircleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PauseCircleIcon: React.FC<PauseCircleIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M9 9v6h2V9zm4 0v6h2V9z"
      />
    </svg>
  );
};

export default PauseCircleIcon;
