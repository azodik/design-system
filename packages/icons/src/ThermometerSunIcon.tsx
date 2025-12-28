import React from "react";

interface ThermometerSunIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ThermometerSunIcon: React.FC<ThermometerSunIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 9a4 4 0 0 0-2 7.5" />
      <path d="M12 2v2" />
      <path d="m12 20 1.5-1.5" />
      <path d="M12 14v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="m20 12 2 0" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
      <path d="M22 12h-1" />
      <path d="M3 12H2" />
      <path d="M12 3V2" />
      <path d="M12 22v-1" />
    </svg>
  );
};

export default ThermometerSunIcon;
