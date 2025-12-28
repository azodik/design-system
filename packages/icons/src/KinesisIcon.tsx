import React from "react";

interface KinesisIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const KinesisIcon: React.FC<KinesisIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <defs>
        <linearGradient id="SVGZDBLty2B" x1="0%" x2="100%" y1="100%" y2="0%">
          <stop offset="0%" stopColor="#4D27A8" />
          <stop offset="100%" stopColor="#A166FF" />
        </linearGradient>
      </defs>
      <path fill="currentColor" d="M0 0h256v256H0z" />
      <path
        fill="currentColor"
        d="M60.8 198.4h6.4c0-26.9 17.488-54.4 147.2-54.4v-6.4c-135.35 0-153.6 30.733-153.6 60.8M80 217.6h6.4c0-24.211 0-60.8 128-60.8v-6.4c-58.678 0-96.87 7.549-116.768 23.078C80 187.238 80 204.788 80 217.6M48 83.2h-6.4c0 23.667 32.125 38.656 95.658 44.8c-63.533 6.144-95.658 21.133-95.658 44.8H48c0-15.536 21.62-41.6 166.4-41.6v-6.4C69.62 124.8 48 98.736 48 83.2m19.2-25.6h-6.4c0 30.067 18.25 60.8 153.6 60.8V112C84.688 112 67.2 84.5 67.2 57.6m147.2 41.6v6.4c-58.678 0-96.87-7.549-116.768-23.078C80 68.762 80 51.212 80 38.4h6.4c0 24.211 0 60.8 128 60.8"
      />
    </svg>
  );
};

export default KinesisIcon;
