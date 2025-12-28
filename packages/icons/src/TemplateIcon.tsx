import React from "react";

interface TemplateIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TemplateIcon: React.FC<TemplateIconProps> = ({ size = 20, className, style }) => {
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
        d="M19 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm11 0a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm0 4a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm0 4a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2z"
      />
    </svg>
  );
};

export default TemplateIcon;
