import React from "react";

interface Texture3DIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Texture3DIcon: React.FC<Texture3DIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
      <path d="M12 6v12M6 12h12" />
    </svg>
  );
};

export default Texture3DIcon;
