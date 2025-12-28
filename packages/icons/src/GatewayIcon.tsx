import React from "react";

interface GatewayIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GatewayIcon: React.FC<GatewayIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M4.553 11.632a7.448 7.448 0 1 0 14.896 0a7.448 7.448 0 0 0-14.896 0m15.57-8.488a1.488 1.488 0 1 0 2.976 0a1.488 1.488 0 0 0-2.976 0m-16.246 0a1.488 1.488 0 1 1-2.976 0a1.488 1.488 0 0 1 2.976 0" />
        <path d="m8.125 18l-1.517 2.146H.922m15.266-2.318l1.63 2.318H23.1M8.094 5.266L6.607 3.144H3.876m12.03 2.137l1.486-2.137h2.731" />
        <path d="m20.9 17.947l2.199 2.199l-2.199 2.198m-17.8 0L.9 20.146l2.2-2.199" />
      </g>
    </svg>
  );
};

export default GatewayIcon;
