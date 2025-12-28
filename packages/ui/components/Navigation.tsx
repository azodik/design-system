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
    <nav className={navClasses} style={{ width: "100%" }} {...props}>
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
