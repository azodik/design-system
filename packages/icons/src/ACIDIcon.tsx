import React from "react";

interface ACIDIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ACIDIcon: React.FC<ACIDIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" />
      <path d="M12 6v12" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
};

export default ACIDIcon;
