import React from "react";

interface NormalIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const NormalIcon: React.FC<NormalIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-4-8v2h8v-2zm0-3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
      />
    </svg>
  );
};

export default NormalIcon;
