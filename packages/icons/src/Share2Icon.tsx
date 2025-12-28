import React from "react";

interface Share2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Share2Icon: React.FC<Share2IconProps> = ({ size = 20, className, style }) => {
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
        d="M13.5 11c-.706 0-1.342.293-1.797.763L4.969 8.396a2.5 2.5 0 0 0 0-.792l6.734-3.367a2.5 2.5 0 1 0-.672-1.341L4.297 6.263a2.5 2.5 0 1 0 0 3.474l6.734 3.367A2.5 2.5 0 1 0 13.5 11"
      />
    </svg>
  );
};

export default Share2Icon;
