import React from "react";

interface CalendarIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({ size = 20, className, style }) => {
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
        d="M2 11h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm15-8h4a1 1 0 0 1 1 1v5H2V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2z"
      />
    </svg>
  );
};

export default CalendarIcon;
