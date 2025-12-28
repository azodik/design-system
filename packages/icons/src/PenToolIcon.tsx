import React from "react";

interface PenToolIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PenToolIcon: React.FC<PenToolIconProps> = ({ size = 20, className, style }) => {
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
      <path d="m15.707 21.293-1.414-1.414L17.586 17l-1.293-1.293a1 1 0 0 1 0-1.414L19.586 11l-1.293-1.293a1 1 0 0 1 0-1.414L21.293 6.707a1 1 0 0 1 1.414 0L23.707 8a1 1 0 0 1 0 1.414L21 12l1.707 1.707a1 1 0 0 1 0 1.414l-1.293 1.293a1 1 0 0 1-1.414 0L17 17.414l-3.293 3.293a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 0-1.414L11 17.586 8.707 15.293a1 1 0 0 1 0-1.414L10 12 8.293 10.293a1 1 0 0 1 0-1.414L9.586 7.586a1 1 0 0 1 1.414 0L12.414 9a1 1 0 0 1 0 1.414L11 11.828l3.293 3.293a1 1 0 0 1 0 1.414z" />
      <circle cx="18" cy="2" r="1" />
      <path d="M2 12h20" />
    </svg>
  );
};

export default PenToolIcon;
