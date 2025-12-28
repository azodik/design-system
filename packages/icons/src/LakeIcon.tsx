import React from "react";

interface LakeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LakeIcon: React.FC<LakeIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M2 12h20M12 2v20" />
      <path d="M6 8c2 2 6 2 8 0M6 16c2-2 6-2 8 0" />
      <path d="M2 12h20M12 2v20" />
      <path d="M6 8c2 2 6 2 8 0M6 16c2-2 6-2 8 0" />
      <path d="M2 12h20M12 2v20" />
      <path d="M6 8c2 2 6 2 8 0M6 16c2-2 6-2 8 0" />
      <path d="M2 12h20M12 2v20" />
      <path d="M6 8c2 2 6 2 8 0M6 16c2-2 6-2 8 0" />
      <path d="M2 12h20M12 2v20" />
      <path d="M6 8c2 2 6 2 8 0M6 16c2-2 6-2 8 0" />
    </svg>
  );
};

export default LakeIcon;
