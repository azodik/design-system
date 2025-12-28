import React from "react";

interface ArrangeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrangeIcon: React.FC<ArrangeIconProps> = ({ size = 20, className, style }) => {
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
        d="M2 2h9v9H2zm7 2H4v5h5zm13 9v9h-9v-9zm-7 7h5v-5h-5zm1-12v3h-3V8zm-5 8H8v-3h3z"
      />
    </svg>
  );
};

export default ArrangeIcon;
