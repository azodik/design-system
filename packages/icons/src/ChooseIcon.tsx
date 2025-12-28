import React from "react";

interface ChooseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ChooseIcon: React.FC<ChooseIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
        d="M28 6h2v20h-2zM17 6l-1.43 1.393L23.15 15H2v2h21.15l-7.58 7.573L17 26l10-10z"
      />
    </svg>
  );
};

export default ChooseIcon;
