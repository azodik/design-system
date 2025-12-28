import React from "react";

interface ViewIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ViewIcon: React.FC<ViewIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 20v-2h18v2zM3 6V4h18v2zm2 10q-.825 0-1.412-.587T3 14v-4q0-.825.588-1.412T5 8h14q.825 0 1.413.588T21 10v4q0 .825-.587 1.413T19 16z"
      />
    </svg>
  );
};

export default ViewIcon;
