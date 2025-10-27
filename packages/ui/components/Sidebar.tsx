import React, { useState, useRef, useEffect } from "react";
import Avatar from "./Avatar";
import { Breadcrumb } from "./Breadcrumb";

// Hook for responsive sidebar functionality
export function useResponsiveSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const smallScreen = window.innerWidth <= 1024;
      setIsSmallScreen(smallScreen);

      // If it's a small screen, ensure sidebar is closed initially
      if (smallScreen) {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleSidebarToggle = () => {
    if (isSmallScreen) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const closeSidebar = () => {
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    }
  };

  return {
    isSidebarOpen,
    isSmallScreen,
    handleSidebarToggle,
    closeSidebar
  };
}

// Sidebar Component
export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: number;
  collapsed?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  showBreadcrumb?: boolean;
  color?: string;
  userProfile?: {
    name: string;
    email: string;
    avatar?: string;
  };
  onUserAction?: (action: string) => void;
  // Responsive props
  isSidebarOpen?: boolean;
  onSidebarToggle?: () => void;
  isSmallScreen?: boolean;
}

export function Sidebar({
  children,
  width = 250,
  collapsed = false,
  showHeader = true,
  showFooter = true,
  showBreadcrumb = true,
  color,
  userProfile,
  onUserAction,
  isSidebarOpen = false,
  onSidebarToggle,
  isSmallScreen = false,
  className = "",
  ...props
}: SidebarProps) {
  const sidebarStyle = {
    width: collapsed ? "60px" : `${width}px`,
    ...(color && ({ "--sidebar-bg-color": color } as React.CSSProperties)),
  };

  return (
    <>
      {/* Mobile & Tablet Overlay */}
      {isSmallScreen && isSidebarOpen && (
        <div 
          className="sidebar-overlay open" 
          onClick={onSidebarToggle}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            opacity: isSidebarOpen ? 1 : 0,
            visibility: isSidebarOpen ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease'
          }}
        />
      )}

      <div
        className={`sidebar ${collapsed ? "sidebar-collapsed" : ""} ${isSmallScreen && isSidebarOpen ? "open" : ""} ${className}`}
        style={{
          ...sidebarStyle,
          ...(isSmallScreen && {
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            zIndex: 1000,
            transition: 'transform 0.3s ease-in-out'
          })
        }}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

// Sidebar Header Component
export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  show?: boolean;
}

export function SidebarHeader({
  children,
  show = true,
  className = "",
  ...props
}: SidebarHeaderProps) {
  if (!show) return null;

  return (
    <div className={`sidebar-header ${className}`} {...props}>
      {children}
    </div>
  );
}

// Sidebar Content Component
export interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SidebarContent({ children, className = "", ...props }: SidebarContentProps) {
  return (
    <div className={`sidebar-content ${className}`} {...props}>
      {children}
    </div>
  );
}

// Sidebar Footer Component
export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  show?: boolean;
}

export function SidebarFooter({
  children,
  show = true,
  className = "",
  ...props
}: SidebarFooterProps) {
  if (!show) return null;

  return (
    <div className={`sidebar-footer ${className}`} {...props}>
      {children}
    </div>
  );
}

// Sidebar Group Component
export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  collapsible?: boolean;
  icon?: React.ReactNode;
  chevronRightIcon?: React.ReactNode;
  chevronDownIcon?: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  show?: boolean;
}

export function SidebarGroup({
  children,
  title,
  collapsible = false,
  icon,
  chevronRightIcon,
  chevronDownIcon,
  isOpen = false,
  onToggle,
  show = true,
  className = "",
  ...props
}: SidebarGroupProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(!isOpen);

  React.useEffect(() => {
    setIsCollapsed(!isOpen);
  }, [isOpen]);

  if (!show) return null;

  return (
    <div className={`sidebar-group ${className}`} {...props}>
      {title && (
        <div
          className={`sidebar-group-header ${collapsible ? "collapsible" : ""}`}
          onClick={() => {
            if (collapsible) {
              if (onToggle) {
                onToggle();
              } else {
                setIsCollapsed(!isCollapsed);
              }
            }
          }}
        >
          <div className="sidebar-group-title">
            {icon && <span className="sidebar-item-icon">{icon}</span>}
            <span>{title}</span>
          </div>
          {collapsible && (
            <span className={`sidebar-group-arrow ${isCollapsed ? "collapsed" : ""}`}>
              {chevronDownIcon || "▼"}
            </span>
          )}
        </div>
      )}
      <div className={`sidebar-group-content ${isCollapsed ? "collapsed" : ""}`}>{children}</div>
    </div>
  );
}

// Sidebar Item Component
export interface SidebarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: string | number;
  tooltip?: string;
  show?: boolean;
}

export function SidebarItem({
  children,
  icon,
  active = false,
  badge,
  tooltip,
  show = true,
  className = "",
  ...props
}: SidebarItemProps) {
  const itemClasses = [active && "active", className].filter(Boolean).join(" ");

  if (!show) return null;

  return (
    <li className="sidebar-item">
      <a className={itemClasses} title={tooltip} {...props}>
        {icon && <span className="sidebar-item-icon">{icon}</span>}
        <span className="sidebar-item-text">{children}</span>
        {badge && <span className="sidebar-item-badge">{badge}</span>}
      </a>
    </li>
  );
}

// Sidebar Brand Component
export interface SidebarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  logo?: React.ReactNode;
  subtitle?: string;
  show?: boolean;
}

export function SidebarBrand({
  children,
  logo,
  subtitle,
  show = true,
  className = "",
  ...props
}: SidebarBrandProps) {
  if (!show) return null;

  return (
    <div className={`sidebar-brand ${className}`} {...props}>
      {logo && <div className="sidebar-brand-logo">{logo}</div>}
      <div className="sidebar-brand-content">
        <div className="sidebar-brand-title">{children}</div>
        {subtitle && <div className="sidebar-brand-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
}

// Sidebar User Component
export interface SidebarUserProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  avatar?: string;
  email?: string;
  actions?: React.ReactNode;
}

export function SidebarUser({
  children,
  avatar,
  email,
  actions,
  className = "",
  ...props
}: SidebarUserProps) {
  return (
    <div className={`sidebar-user ${className}`} {...props}>
      <div className="sidebar-user-info">
        {avatar && <div className="sidebar-user-avatar">{avatar}</div>}
        <div className="sidebar-user-content">
          <div className="sidebar-user-name">{children}</div>
          {email && <div className="sidebar-user-email">{email}</div>}
        </div>
      </div>
      {actions && <div className="sidebar-user-actions">{actions}</div>}
    </div>
  );
}

// Sidebar User Dropdown Component
export interface SidebarUserDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  email: string;
  avatar?: React.ReactNode;
  companyName?: string;
  companyEmail?: string;
  menuItems: Array<{
    label?: string;
    onClick?: () => void;
    divider?: boolean;
  }>;
  collapsed?: boolean;
}

export function SidebarUserDropdown({
  name,
  email,
  avatar,
  companyName,
  companyEmail,
  menuItems,
  collapsed = false,
  className = "",
  ...props
}: SidebarUserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (onClick: () => void) => {
    onClick();
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`sidebar-user-dropdown ${isOpen ? "open" : ""} ${className}`}
      {...props}
    >
      <div className="sidebar-user-trigger" onClick={handleToggle}>
        {avatar || (
          <Avatar
            size="md"
            initials={name.charAt(0).toUpperCase()}
            className="sidebar-user-avatar"
          />
        )}
        {!collapsed && (
          <div className="sidebar-user-info">
            <div className="sidebar-user-name">{name}</div>
            <div className="sidebar-user-email">{email}</div>
          </div>
        )}
        {!collapsed && (
          <div className="sidebar-user-chevrons">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14l5-5 5 5z" />
            </svg>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        )}
      </div>

      {/* Dropdown Content */}
      <div className="sidebar-user-dropdown-content">
        <div className="sidebar-user-dropdown-header">
          <Avatar
            size="md"
            initials={name.charAt(0).toUpperCase()}
            className="sidebar-user-dropdown-avatar"
          />
          <div className="sidebar-user-dropdown-info">
            <div className="sidebar-user-dropdown-name">{companyName || name}</div>
            <div className="sidebar-user-dropdown-email">{companyEmail || email}</div>
          </div>
        </div>
        <ul className="sidebar-user-dropdown-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-user-dropdown-item">
              {item.divider ? (
                <div className="sidebar-user-dropdown-divider" />
              ) : (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.onClick!);
                  }}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Simple Sidebar Components (Shadcn-style composition)
export interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

export function SidebarMenu({ children, className = "", ...props }: SidebarMenuProps) {
  return (
    <ul className={`sidebar-nav ${className}`} {...props}>
      {children}
    </ul>
  );
}

export interface SidebarMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  show?: boolean;
}

export function SidebarMenuItem({
  children,
  show = true,
  className = "",
  ...props
}: SidebarMenuItemProps) {
  if (!show) return null;

  return (
    <li className={`sidebar-item ${className}`} {...props}>
      {children}
    </li>
  );
}

export interface SidebarMenuButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
}

export function SidebarMenuButton({
  children,
  icon,
  active = false,
  className = "",
  ...props
}: SidebarMenuButtonProps) {
  const buttonClasses = [active && "active", className].filter(Boolean).join(" ");

  return (
    <a className={buttonClasses} {...props}>
      {icon && <span className="sidebar-item-icon">{icon}</span>}
      <span className="sidebar-item-text">{children}</span>
    </a>
  );
}

export interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SidebarGroupLabel({ children, className = "", ...props }: SidebarGroupLabelProps) {
  return (
    <div className={`sidebar-group-label ${className}`} {...props}>
      {children}
    </div>
  );
}

export interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SidebarGroupContent({
  children,
  className = "",
  ...props
}: SidebarGroupContentProps) {
  return (
    <div className={`sidebar-group-content ${className}`} {...props}>
      {children}
    </div>
  );
}

// Sidebar Main Content Component
export interface SidebarMainContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
  breadcrumb?: React.ReactNode;
  showBreadcrumb?: boolean;
  onSidebarToggle?: () => void;
  isSidebarCollapsed?: boolean;
  sidebarToggleIcon?: React.ReactNode;
  showToggleOnDesktop?: boolean;
  themeToggle?: React.ReactNode;
  languageSelector?: React.ReactNode;
  isSmallScreen?: boolean;
}

export function SidebarMainContent({
  children,
  breadcrumbItems,
  breadcrumb,
  onSidebarToggle,
  isSidebarCollapsed = false,
  sidebarToggleIcon,
  showBreadcrumb = true,
  showToggleOnDesktop = false,
  themeToggle,
  languageSelector,
  isSmallScreen = false,
  className = "",
  ...props
}: SidebarMainContentProps) {
  return (
    <div 
      className={`main-content-area ${className}`} 
      style={{
        ...(isSmallScreen && {
          width: '100%',
          marginLeft: 0
        })
      }}
      {...props}
    >
      {/* Main Header Section */}
      <header className="main-content-header">
        {onSidebarToggle && (
          <button
            className={`sidebar-toggle-button ${showToggleOnDesktop ? "show-on-desktop" : ""}`}
            onClick={onSidebarToggle}
          >
            {sidebarToggleIcon || (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            )}
          </button>
        )}
        
        {/* Breadcrumb Section */}
        {showBreadcrumb && (breadcrumbItems || breadcrumb) && (
          <div className="breadcrumb-section">
            {breadcrumb ? (
              breadcrumb
            ) : breadcrumbItems ? (
              <Breadcrumb items={breadcrumbItems} />
            ) : null}
          </div>
        )}
        
        {/* Language Selector and Theme Toggle Section */}
        {(languageSelector || themeToggle) && (
          <div className="theme-toggle-section">
            <div className="flex items-center gap-2">
              {languageSelector && (
                <div className="language-selector-section">
                  {languageSelector}
                </div>
              )}
              {themeToggle && (
                <div className="theme-toggle-wrapper">
                  {themeToggle}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Scrollable Main Content */}
      <div className="main-content-scrollable">{children}</div>
    </div>
  );
}
