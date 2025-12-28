import React from "react";

interface BriefcaseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BriefcaseIcon: React.FC<BriefcaseIconProps> = ({ size = 20, className, style }) => {
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
        d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 15v4h16v-4zm7-4v2h2v-2zM9 3v2h6V3z"
      />
    </svg>
  );
};

export default BriefcaseIcon;
