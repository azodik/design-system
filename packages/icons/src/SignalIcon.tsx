import React from "react";

interface SignalIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SignalIcon: React.FC<SignalIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M3 21h3v-3H3m5 3h3v-7H8m5 7h3V9h-3m5 12h3V3h-3z" />
    </svg>
  );
};

export default SignalIcon;
