import React, { useState } from "react";

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  brand?: React.ReactNode;
  mobile?: boolean;
}

export default function Navigation({
  children,
  brand,
  mobile = false,
  className = "",
  ...props
}: NavigationProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navClasses = ["navbar", mobile && "navbar-mobile", className].filter(Boolean).join(" ");

  return (
    <nav className={navClasses} {...props}>
      {brand && <div className="navbar-brand">{brand}</div>}
      <ul className={`navbar-nav ${isMobileOpen ? "open" : ""}`}>{children}</ul>
      {mobile && (
        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      )}
    </nav>
  );
}

// Navigation Item Component
export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
  href?: string;
}

export function NavItem({ children, active = false, className = "", ...props }: NavItemProps) {
  const itemClasses = [active && "active", className].filter(Boolean).join(" ");

  return (
    <li>
      <a className={itemClasses} {...props}>
        {children}
      </a>
    </li>
  );
}

// Breadcrumb Component
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
}

export function Breadcrumb({ items, className = "", ...props }: BreadcrumbProps) {
  return (
    <nav className={`breadcrumb ${className}`} {...props}>
      {items.map((item, index) => (
        <div key={index} className={`breadcrumb-item ${item.current ? "current" : ""}`}>
          {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
        </div>
      ))}
    </nav>
  );
}

// Pagination Component
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  className = "",
  ...props
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisible - 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <nav className={`pagination ${className}`} {...props}>
      <ul>
        {showFirstLast && currentPage > 1 && (
          <li className="pagination-item">
            <button className="pagination-link" onClick={() => onPageChange(1)}>
              «
            </button>
          </li>
        )}

        {showPrevNext && currentPage > 1 && (
          <li className="pagination-item">
            <button className="pagination-link" onClick={() => onPageChange(currentPage - 1)}>
              ‹
            </button>
          </li>
        )}

        {getPageNumbers().map((page) => (
          <li key={page} className="pagination-item">
            <button
              className={`pagination-link ${page === currentPage ? "active" : ""}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {showPrevNext && currentPage < totalPages && (
          <li className="pagination-item">
            <button className="pagination-link" onClick={() => onPageChange(currentPage + 1)}>
              ›
            </button>
          </li>
        )}

        {showFirstLast && currentPage < totalPages && (
          <li className="pagination-item">
            <button className="pagination-link" onClick={() => onPageChange(totalPages)}>
              »
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

// Tabs Component
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  children,
  defaultValue,
  value,
  onValueChange,
  className = "",
  ...props
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || "");

  const currentValue = value !== undefined ? value : activeTab;

  const handleTabChange = (tabValue: string) => {
    if (value === undefined) {
      setActiveTab(tabValue);
    }
    onValueChange?.(tabValue);
  };

  return (
    <div className={`tabs ${className}`} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.props) {
          return React.cloneElement(child, {
            ...child.props,
            activeValue: currentValue,
            onValueChange: handleTabChange,
          } as any);
        }
        return child;
      })}
    </div>
  );
}

// Tab List Component
export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  activeValue?: string;
  onValueChange?: (value: string) => void;
}

export function TabList({
  children,
  activeValue,
  onValueChange,
  className = "",
  ...props
}: TabListProps) {
  return (
    <div className={`tabs-list ${className}`} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.props) {
          return React.cloneElement(child, {
            ...child.props,
            active: (child.props as any).value === activeValue,
            onClick: () => onValueChange?.((child.props as any).value),
          } as any);
        }
        return child;
      })}
    </div>
  );
}

// Tab Trigger Component
export interface TabTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  value: string;
  active?: boolean;
}

export function TabTrigger({
  children,
  value,
  active = false,
  className = "",
  ...props
}: TabTriggerProps) {
  const triggerClasses = ["tabs-trigger", active && "active", className].filter(Boolean).join(" ");

  return (
    <button className={triggerClasses} {...props}>
      {children}
    </button>
  );
}

// Tab Content Component
export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value: string;
  activeValue?: string;
}

export function TabContent({
  children,
  value,
  activeValue,
  className = "",
  ...props
}: TabContentProps) {
  if (value !== activeValue) return null;

  return (
    <div className={`tabs-content ${className}`} {...props}>
      {children}
    </div>
  );
}

// Sidebar Component
export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: number;
  collapsed?: boolean;
}

export function Sidebar({ children, width = 250, collapsed = false, className = "", ...props }: SidebarProps) {
  return (
    <div 
      className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''} ${className}`} 
      style={{ width: collapsed ? '60px' : `${width}px` }} 
      {...props}
    >
      {children}
    </div>
  );
}

// Sidebar Header Component
export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SidebarHeader({ children, className = "", ...props }: SidebarHeaderProps) {
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
}

export function SidebarFooter({ children, className = "", ...props }: SidebarFooterProps) {
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
}

export function SidebarGroup({ children, title, collapsible = false, icon, chevronRightIcon, chevronDownIcon, isOpen = false, onToggle, className = "", ...props }: SidebarGroupProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(!isOpen);

  React.useEffect(() => {
    setIsCollapsed(!isOpen);
  }, [isOpen]);

  return (
    <div className={`sidebar-group ${className}`} {...props}>
      {title && (
        <div 
          className={`sidebar-group-header ${collapsible ? 'collapsible' : ''}`}
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
            <span className={`sidebar-group-arrow ${isCollapsed ? 'collapsed' : ''}`}>
              {chevronDownIcon || '▼'}
            </span>
          )}
        </div>
      )}
      <div className={`sidebar-group-content ${isCollapsed ? 'collapsed' : ''}`}>
        {children}
      </div>
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
}

export function SidebarItem({
  children,
  icon,
  active = false,
  badge,
  tooltip,
  className = "",
  ...props
}: SidebarItemProps) {
  const itemClasses = [active && "active", className].filter(Boolean).join(" ");

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
}

export function SidebarBrand({ children, logo, subtitle, className = "", ...props }: SidebarBrandProps) {
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

export function SidebarUser({ children, avatar, email, actions, className = "", ...props }: SidebarUserProps) {
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
