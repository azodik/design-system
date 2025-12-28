import React from "react";

interface InstrumentIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const InstrumentIcon: React.FC<InstrumentIconProps> = ({ size = 20, className, style }) => {
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
        d="M11.5 2h-1v4.2c-.1.1-.2.1-.3.3L2.1 20.7c-.3.6.1 1.3.8 1.3H16v-2H4.8L11 9.2l5.7 10l1.7-1l-6.6-11.8l-.3-.3zM21 6h-1v12l-.5 4h2l-.5-4z"
      />
    </svg>
  );
};

export default InstrumentIcon;
