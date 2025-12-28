import React from "react";

interface NomadIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const NomadIcon: React.FC<NomadIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 438 24"
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
        d="M220.28 512L0 381.024V127.405L219.089 0L438 126.214v257.191zm108.855-410.858l-74.1 43.374v87.547l-74.244-44.087l-71.39 41.79v182.983l74.1-45.442v-98.495l79.144 49.962L329.135 278z"
      />
    </svg>
  );
};

export default NomadIcon;
