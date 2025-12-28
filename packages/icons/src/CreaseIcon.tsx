import React from "react";

interface CreaseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CreaseIcon: React.FC<CreaseIconProps> = ({ size = 20, className, style }) => {
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
        d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m6 8v-2h-2v2h-2v2h2v2h2v-2h2v-2zm4 0v2h6v-2z"
      />
    </svg>
  );
};

export default CreaseIcon;
