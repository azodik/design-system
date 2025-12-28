import React from "react";

interface ClusterIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ClusterIcon: React.FC<ClusterIconProps> = ({ size = 20, className, style }) => {
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
        d="M1 13v10h22V13Zm12 6H4v-2h9Zm3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1M1 1v10h22V1Zm12 6H4V5h9Zm3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"
      />
    </svg>
  );
};

export default ClusterIcon;
