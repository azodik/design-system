import React from "react";

interface EquipmentIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const EquipmentIcon: React.FC<EquipmentIconProps> = ({ size = 20, className, style }) => {
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
        d="M3.5 2a.5.5 0 0 0-.5.5V13H2v1h6v-1.5H4V3h8v1h1V2.5a.5.5 0 0 0-.5-.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm1.5 7.5h1v-1h-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default EquipmentIcon;
