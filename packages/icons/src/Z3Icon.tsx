import React from "react";

interface Z3IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Z3Icon: React.FC<Z3IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M8 8h8M8 12h8M8 16h6" />
    </svg>
  );
};

export default Z3Icon;
