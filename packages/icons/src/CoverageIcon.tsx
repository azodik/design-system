import React from "react";

interface CoverageIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CoverageIcon: React.FC<CoverageIconProps> = ({ size = 20, className, style }) => {
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
        d="M4 21q-.825 0-1.412-.587T2 19V7h2v12h15v2zm4-4q-.825 0-1.412-.587T6 15V3h17v12q0 .825-.587 1.413T21 17zm2-5h4V7h-4zm5 0h4v-2h-4zm0-3h4V7h-4z"
      />
    </svg>
  );
};

export default CoverageIcon;
