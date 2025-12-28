import React from "react";

interface DepositIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DepositIcon: React.FC<DepositIconProps> = ({ size = 20, className, style }) => {
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
        d="M15 3a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v12h2v2H1v-2h2V7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1zm-5 5H8v11h2zm6 0h-2v11h2zm-2-3h-4v1h4z"
      />
    </svg>
  );
};

export default DepositIcon;
