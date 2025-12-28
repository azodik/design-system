import React from "react";

interface AbacusIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AbacusIcon: React.FC<AbacusIconProps> = ({ size = 20, className, style }) => {
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
        d="M5 5h2v6H5zm5 0H8v6h2zM5 19h2v-6H5zm5-6H8v6h2v-2h5v-2h-5zm-8 8h2V3H2zM20 3v4h-7V5h-2v6h2V9h7v6h-2v-2h-2v6h2v-2h2v4h2V3z"
      />
    </svg>
  );
};

export default AbacusIcon;
