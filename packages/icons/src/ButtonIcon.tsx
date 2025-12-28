import React from "react";

interface ButtonIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ size = 20, className, style }) => {
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
      <path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m56-88a56 56 0 1 1-56-56a56.06 56.06 0 0 1 56 56"
      />
    </svg>
  );
};

export default ButtonIcon;
