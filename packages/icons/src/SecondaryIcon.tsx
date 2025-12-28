import React from "react";

interface SecondaryIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SecondaryIcon: React.FC<SecondaryIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048"
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
        d="M1024 384v128H0V384zM0 896h2048v128H0zm1024 640v-128h1024v128z"
      />
    </svg>
  );
};

export default SecondaryIcon;
