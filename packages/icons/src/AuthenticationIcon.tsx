import React from "react";

interface AuthenticationIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AuthenticationIcon: React.FC<AuthenticationIconProps> = ({ size = 20, className, style }) => {
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
        d="M2 7v2h4v2H4a2 2 0 0 0-2 2v4h6v-2H4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm7 0v10h2v-4h3v-2h-3V9h4V7zm9 0a2 2 0 0 0-2 2v8h2v-3h2v3h2V9a2 2 0 0 0-2-2zm0 2h2v3h-2z"
      />
    </svg>
  );
};

export default AuthenticationIcon;
