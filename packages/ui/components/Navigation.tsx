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
  title?: string;
  width?: number;
}

export function Sidebar({ children, title, width = 250, className = "", ...props }: SidebarProps) {
  return (
    <div className={`sidebar ${className}`} style={{ width: `${width}px` }} {...props}>
      {title && (
        <div className="sidebar-header">
          <h3 className="sidebar-title">{title}</h3>
        </div>
      )}
      <ul className="sidebar-nav">{children}</ul>
    </div>
  );
}

// Sidebar Item Component
export interface SidebarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
}

export function SidebarItem({
  children,
  icon,
  active = false,
  className = "",
  ...props
}: SidebarItemProps) {
  const itemClasses = [active && "active", className].filter(Boolean).join(" ");

  return (
    <li>
      <a className={itemClasses} {...props}>
        {icon && <span className="icon">{icon}</span>}
        {children}
      </a>
    </li>
  );
}
