import React from "react";

interface PDFIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PDFIcon: React.FC<PDFIconProps> = ({ size = 20, className, style }) => {
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
        d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-4 14a4 4 0 0 0 0-8H8v8zm-2-6h2a2 2 0 1 1 0 4h-2z"
      />
    </svg>
  );
};

export default PDFIcon;
