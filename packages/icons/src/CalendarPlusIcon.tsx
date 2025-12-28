import React from "react";

interface CalendarPlusIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CalendarPlusIcon: React.FC<CalendarPlusIconProps> = ({ size = 20, className, style }) => {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <line x1="12" x2="12" y1="16" y2="20" />
      <line x1="10" x2="14" y1="18" y2="18" />
    </svg>
  );
};

export default CalendarPlusIcon;
