import React from "react";

interface BookmarkXIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BookmarkXIcon: React.FC<BookmarkXIconProps> = ({ size = 20, className, style }) => {
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
      <line x1="14.5" x2="9.5" y1="7.5" y2="12.5" />
      <line x1="9.5" x2="14.5" y1="7.5" y2="12.5" />
    </svg>
  );
};

export default BookmarkXIcon;
