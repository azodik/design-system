"use client";
import React, { useState, useEffect, useRef } from "react";

export interface StickyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Header content
   */
  children: React.ReactNode;
  /**
   * Scroll threshold (px) before header becomes sticky
   */
  threshold?: number;
  /**
   * Hide header on scroll down, show on scroll up
   */
  autoHide?: boolean;
  /**
   * Sticky position
   */
  position?: "top" | "bottom";
  /**
   * Z-index
   */
  zIndex?: number;
}

/**
 * Sticky Header component - Auto-hiding header on scroll
 *
 * @example
 * ```tsx
 * <StickyHeader autoHide threshold={100}>
 *   <Navigation />
 * </StickyHeader>
 * ```
 */
export function StickyHeader({
  children,
  threshold = 0,
  autoHide = false,
  position = "top",
  zIndex = 1000,
  className = "",
  style,
  ...props
}: StickyHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if should be sticky
      if (scrollY > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Auto-hide logic
      if (autoHide) {
        if (scrollY > lastScrollY && scrollY > threshold) {
          // Scrolling down
          setIsVisible(false);
        } else if (scrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, autoHide, lastScrollY]);

  const stickyClasses = [
    "sticky-header",
    isSticky && "sticky-header-sticky",
    !isVisible && "sticky-header-hidden",
    `sticky-header-${position}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    zIndex,
  } as React.CSSProperties;

  return (
    <div ref={headerRef} className={stickyClasses} style={customStyle} {...props}>
      {children}
    </div>
  );
}

export default StickyHeader;
