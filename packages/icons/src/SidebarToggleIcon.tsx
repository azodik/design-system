import React from "react";
import MenuIcon from "./MenuIcon";
import XIcon from "./XIcon";

interface SidebarToggleIconProps {
  size?: number;
  isCollapsed?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SidebarToggleIcon: React.FC<SidebarToggleIconProps> = ({
  size = 20,
  isCollapsed = false,
  className,
  style,
}) => {
  if (isCollapsed) {
    return <XIcon size={size} className={className} style={style} />;
  }

  return <MenuIcon size={size} className={className} style={style} />;
};

export default SidebarToggleIcon;
