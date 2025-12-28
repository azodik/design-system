import React from "react";

interface XCircle2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const XCircle2Icon: React.FC<XCircle2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
      <line x1="9" x2="15" y1="9" y2="15" />
      <line x1="15" x2="9" y1="9" y2="15" />
    </svg>
  );
};

export default XCircle2Icon;
