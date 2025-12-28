import React from "react";

interface WalletCardsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const WalletCardsIcon: React.FC<WalletCardsIconProps> = ({ size = 20, className, style }) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <rect width="10" height="7" x="7" y="8" rx="1" />
      <path d="M17 11v-1" />
      <path d="M17 15v-1" />
    </svg>
  );
};

export default WalletCardsIcon;
