import React from "react";

interface PharmacyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PharmacyIcon: React.FC<PharmacyIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 21v-2l2-6l-2-6V5h12.7l1.45-4l2.35.85L18.35 5H21v2l-2 6l2 6v2zm8-4h2v-3h3v-2h-3V9h-2v3H8v2h3z"
      />
    </svg>
  );
};

export default PharmacyIcon;
