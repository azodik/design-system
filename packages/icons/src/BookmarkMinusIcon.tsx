import React from "react";

interface BookmarkMinusIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BookmarkMinusIcon: React.FC<BookmarkMinusIconProps> = ({ size = 20, className, style }) => {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      <line x1="15" x2="9" y1="10" y2="10" />
    </svg>
  );
};

export default BookmarkMinusIcon;
