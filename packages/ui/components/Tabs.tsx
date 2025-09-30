import React, { useState } from "react";

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
  onValueChange?: (value: string) => void;
}

export function TabContent({
  children,
  value,
  activeValue,
  onValueChange,
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
