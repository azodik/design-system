import React from "react";

interface InactiveIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const InactiveIcon: React.FC<InactiveIconProps> = ({ size = 20, className, style }) => {
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
        d="M8 22q-.825 0-1.412-.587T6 20v-2H4q-.825 0-1.412-.587T2 16v-2h2v2h2V8q0-.825.588-1.412T8 6h8V4h-2V2h2q.825 0 1.413.588T18 4v2h2q.825 0 1.413.588T22 8v12q0 .825-.587 1.413T20 22zM2 12V8h2v4zm0-6V4q0-.825.588-1.412T4 2h2v2H4v2zm6-2V2h4v2z"
      />
    </svg>
  );
};

export default InactiveIcon;
