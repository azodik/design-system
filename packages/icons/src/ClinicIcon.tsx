import React from "react";

interface ClinicIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ClinicIcon: React.FC<ClinicIconProps> = ({ size = 20, className, style }) => {
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
        d="M11 17h2v-5h-2zm1-7q.425 0 .713-.288T13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10M4 21V9l8-6l8 6v12z"
      />
    </svg>
  );
};

export default ClinicIcon;
