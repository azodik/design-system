import React from "react";

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
