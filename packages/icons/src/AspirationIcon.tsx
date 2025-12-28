import React from "react";

interface AspirationIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AspirationIcon: React.FC<AspirationIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      <path d="M12 2v20" />
      <path d="M12 2v20" />
      <path d="M12 2v20" />
      <path d="M12 2v20" />
      <path d="M12 2v20" />
    </svg>
  );
};

export default AspirationIcon;
