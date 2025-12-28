import React from "react";

interface AuditIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AuditIcon: React.FC<AuditIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinejoin="round" strokeWidth="4">
        <path d="m8 36l.005-7.957a1 1 0 0 1 1-1h10.002c.922 0 .917-.818.917-2.764s-4.902-3.585-4.902-10.426S20.1 5 24.32 5s8.817 2.012 8.817 8.853s-4.876 7.929-4.876 10.426s0 2.764.78 2.764h9.96a1 1 0 0 1 1 1V36z" />
        <path strokeLinecap="round" d="M8 42h32" />
      </g>
    </svg>
  );
};

export default AuditIcon;
