import React from "react";

interface SoftIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SoftIcon: React.FC<SoftIconProps> = ({ size = 20, className, style }) => {
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
        fillRule="evenodd"
        d="M0 5a.75.75 0 0 1 .75-.75h11.5a3.75 3.75 0 1 1 0 7.5H9.87l.97.97a.75.75 0 1 1-1.06 1.06l-2.25-2.25L7 11l.53-.53l2.25-2.25a.75.75 0 1 1 1.06 1.06l-.97.97h2.38a2.25 2.25 0 0 0 0-4.5H.75A.75.75 0 0 1 0 5m6 6a.75.75 0 0 0-.75-.75H.75a.75.75 0 0 0 0 1.5h4.5A.75.75 0 0 0 6 11"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SoftIcon;
