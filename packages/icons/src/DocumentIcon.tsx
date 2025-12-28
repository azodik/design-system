import React from "react";

interface DocumentIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DocumentIcon: React.FC<DocumentIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path strokeDasharray="64" strokeDashoffset="64" d="M13 3l6 6v12h-14v-18h8">
          <animate fill="currentColor" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
        </path>
        <path strokeDasharray="14" strokeDashoffset="14" strokeWidth="1" d="M12.5 3v5.5h6.5">
          <animate
            fill="currentColor"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.2s"
            values="14;0"
          />
        </path>
      </g>
    </svg>
  );
};

export default DocumentIcon;
