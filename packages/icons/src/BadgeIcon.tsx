import React from "react";

interface BadgeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BadgeIcon: React.FC<BadgeIconProps> = ({ size = 20, className, style }) => {
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
        d="M16.486 3.143L12 5.833l-4.486-2.69A1 1 0 0 0 6 4v13a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 17V4a1 1 0 0 0-1.514-.857"
      />
    </svg>
  );
};

export default BadgeIcon;
