import React from "react";

interface SchoolIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SchoolIcon: React.FC<SchoolIconProps> = ({ size = 20, className, style }) => {
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
        d="M23 19h-1V9h-4V6.586l-6-6l-6 6V9H2v10H1v2h22zM6 19H4v-8h2zm12-8h2v8h-2zm-7 1h2v7h-2z"
      />
    </svg>
  );
};

export default SchoolIcon;
