import React from "react";

interface PaddingIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PaddingIcon: React.FC<PaddingIconProps> = ({ size = 20, className, style }) => {
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
        d="M8 9q.425 0 .713-.288T9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9m4 0q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m4 0q.425 0 .713-.288T17 8t-.288-.712T16 7t-.712.288T15 8t.288.713T16 9M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
      />
    </svg>
  );
};

export default PaddingIcon;
