import React from "react";

interface ShoppingCartPlusIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ShoppingCartPlusIcon: React.FC<ShoppingCartPlusIconProps> = ({
  size = 20,
  className,
  style,
}) => {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="10" x2="14" y1="10" y2="10" />
    </svg>
  );
};

export default ShoppingCartPlusIcon;
