import React from "react";

interface Activity3IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Activity3Icon: React.FC<Activity3IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M22 12h-2.5a2.5 2.5 0 0 0 0 5H22" />
      <path d="M12 6V4.5a2.5 2.5 0 0 0-5 0V6" />
      <path d="M12 18v1.5a2.5 2.5 0 0 1-5 0V18" />
      <path d="M2 12h2.5a2.5 2.5 0 0 1 0 5H2" />
      <path d="M22 12h-2" />
      <path d="M7 12h10" />
    </svg>
  );
};

export default Activity3Icon;
