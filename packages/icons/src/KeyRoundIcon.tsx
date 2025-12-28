import React from "react";

interface KeyRoundIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const KeyRoundIcon: React.FC<KeyRoundIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0Z" />
      <path d="M12 2a10 10 0 0 0-10 10" />
      <path d="M12 22a10 10 0 0 0 10-10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

export default KeyRoundIcon;
