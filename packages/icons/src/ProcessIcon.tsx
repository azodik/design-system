import React from "react";

interface ProcessIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ProcessIcon: React.FC<ProcessIconProps> = ({ size = 20, className, style }) => {
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
        d="m3.3 18.45l-1.8-.9l6-12l1.8.9zm6.6 0l-1.8-.9l6-12l1.8.9zm6.6 0l-1.8-.9l6-12l1.8.9z"
      />
    </svg>
  );
};

export default ProcessIcon;
