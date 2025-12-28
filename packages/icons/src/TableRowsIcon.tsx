import React from "react";

interface TableRowsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TableRowsIcon: React.FC<TableRowsIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M3 12h18" />
      <path d="M3 15h18" />
    </svg>
  );
};

export default TableRowsIcon;
