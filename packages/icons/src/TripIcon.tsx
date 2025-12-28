import React from "react";

interface TripIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TripIcon: React.FC<TripIconProps> = ({ size = 20, className, style }) => {
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
        d="M18 21V6h2q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zM10 6h4V4h-4zM8 21V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v17zm-4 0q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h2v15z"
      />
    </svg>
  );
};

export default TripIcon;
