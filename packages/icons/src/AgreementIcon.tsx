import React from "react";

interface AgreementIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AgreementIcon: React.FC<AgreementIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <g fill="currentColor" strokeLinecap="round" strokeWidth="4">
        <rect width="32" height="40" x="8" y="4" strokeLinejoin="round" rx="2" />
        <path strokeLinejoin="round" d="M16 4h9v16l-4.5-4l-4.5 4z" />
        <path d="M16 28h10m-10 6h16" />
      </g>
    </svg>
  );
};

export default AgreementIcon;
