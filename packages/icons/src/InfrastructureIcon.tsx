import React from "react";

interface InfrastructureIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const InfrastructureIcon: React.FC<InfrastructureIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path fill="currentColor" d="M18 26h12v2H18zm0-5h12v2H18zm0-5h12v2H18z" />
      <path
        fill="currentColor"
        d="M14 25H9.5a7.496 7.496 0 0 1-1.322-14.876A10 10 0 0 1 28 12h-2a7.999 7.999 0 0 0-15.95-.87l-.09.834l-.837.056A5.496 5.496 0 0 0 9.5 23H14Z"
      />
    </svg>
  );
};

export default InfrastructureIcon;
