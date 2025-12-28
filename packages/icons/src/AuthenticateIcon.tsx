import React from "react";

interface AuthenticateIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AuthenticateIcon: React.FC<AuthenticateIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <circle
        cx="24"
        cy="24"
        r="21.5"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M42.17 3.42L15.49 18.83a4.3 4.3 0 0 0-1.58 5.87h0a4.3 4.3 0 0 0 5.88 1.58l7.9-4.56a4.29 4.29 0 0 1 5.87 1.58h0A4.29 4.29 0 0 1 32 29.17L5.31 44.58"
      />
    </svg>
  );
};

export default AuthenticateIcon;
