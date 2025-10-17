import React from "react";

interface SidebarToggleIconProps {
  size?: number;
  isCollapsed?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SidebarToggleIcon: React.FC<SidebarToggleIconProps> = ({
  size = 16,
  isCollapsed = false,
  className,
  style,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        transition: "transform 0.3s ease",
        ...style,
      }}
    >
      <path
        d={isCollapsed 
          ? "M4 6h12v12H4V6zm2 2h8v2H6V8zm0 3h6v2H6v-2zm0 3h8v2H6v-2zm14-4l-4 4 4 4" 
          : "M4 6h12v12H4V6zm2 2h8v2H6V8zm0 3h6v2H6v-2zm0 3h8v2H6v-2zm16-4l-4-4-4 4"
        }
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default SidebarToggleIcon;
