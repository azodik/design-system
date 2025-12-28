import React from "react";

interface GrammarIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GrammarIcon: React.FC<GrammarIconProps> = ({ size = 20, className, style }) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0M4 12V7a3 3 0 1 1 6 0v5M4 9h6m10-3v6M4 16h12M4 20h6m4 0l2 2l5-5"
      />
    </svg>
  );
};

export default GrammarIcon;
