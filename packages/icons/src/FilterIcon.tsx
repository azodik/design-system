import React from "react";

interface FilterIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FilterIcon: React.FC<FilterIconProps> = ({ size = 20, className, style }) => {
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
        d="M20 3H4a1 1 0 0 0-1 1v2.227l.008.223a3 3 0 0 0 .772 1.795L8 12.886V21a1 1 0 0 0 1.316.949l6-2l.108-.043A1 1 0 0 0 16 19v-6.586l4.121-4.12A3 3 0 0 0 21 6.171V4a1 1 0 0 0-1-1"
      />
    </svg>
  );
};

export default FilterIcon;
