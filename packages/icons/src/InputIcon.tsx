import React from "react";

interface InputIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const InputIcon: React.FC<InputIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
};

export default InputIcon;
