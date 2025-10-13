import React from "react";
import ChevronRightIcon from "../../../docs/src/icons/ChevronRightIcon";

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
          {index < items.length - 1 && (
            <ChevronRightIcon size={16} className="breadcrumb-separator" />
          )}
        </div>
      ))}
    </nav>
  );
}
