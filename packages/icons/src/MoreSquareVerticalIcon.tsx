import React from "react";

interface MoreSquareVerticalIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MoreSquareVerticalIcon: React.FC<MoreSquareVerticalIconProps> = ({
  size = 20,
  className,
  style,
}) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
};

export default MoreSquareVerticalIcon;
