import React from "react";

interface ComplianceIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ComplianceIcon: React.FC<ComplianceIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" strokeWidth="2" d="M8 6h8V1H8zm8-3h5v20H3V3h5m0 11l3 3l6-6" />
    </svg>
  );
};

export default ComplianceIcon;
