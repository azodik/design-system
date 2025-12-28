import React from "react";

interface FolderCheckIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FolderCheckIcon: React.FC<FolderCheckIconProps> = ({ size = 20, className, style }) => {
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
        d="M19 13c1.093 0 2.117.292 3 .803V6a1 1 0 0 0-1-1h-8.586l-2-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10.341A6 6 0 0 1 19 13m-3.536 5.465L19 22l4.95-4.95l-1.415-1.414L19 19.172l-2.121-2.122z"
      />
    </svg>
  );
};

export default FolderCheckIcon;
