import React from "react";

interface TablePropertiesIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TablePropertiesIcon: React.FC<TablePropertiesIconProps> = ({
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
      <circle cx="6" cy="6" r="1" />
      <circle cx="12" cy="6" r="1" />
      <circle cx="18" cy="6" r="1" />
    </svg>
  );
};

export default TablePropertiesIcon;
