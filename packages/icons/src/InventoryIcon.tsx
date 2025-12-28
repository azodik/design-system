import React from "react";

interface InventoryIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const InventoryIcon: React.FC<InventoryIconProps> = ({ size = 20, className, style }) => {
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
        d="m15.5 19.925l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM21 10h-2V5h-2v3H7V5H5v14h6v2H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5zm-9-5q.425 0 .713-.288T13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5"
      />
    </svg>
  );
};

export default InventoryIcon;
