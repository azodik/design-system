import React from "react";

interface DiscoveryIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DiscoveryIcon: React.FC<DiscoveryIconProps> = ({ size = 20, className, style }) => {
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
      <circle
        cx="16.239"
        cy="28.435"
        r="11.739"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.24 16.696v-8.87h11.086A16.174 16.174 0 0 1 43.5 24h0a16.174 16.174 0 0 1-16.174 16.174H16.24"
      />
    </svg>
  );
};

export default DiscoveryIcon;
