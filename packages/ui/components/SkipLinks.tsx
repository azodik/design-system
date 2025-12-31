"use client";
import React from "react";

export interface SkipLink {
  /**
   * Link label
   */
  label: string;
  /**
   * Target element ID
   */
  targetId: string;
  /**
   * Link order
   */
  order?: number;
}

export interface SkipLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Skip links
   */
  links: SkipLink[];
  /**
   * Show skip links
   */
  show?: boolean;
}

/**
 * Skip Links component - Skip to main content links
 *
 * @example
 * ```tsx
 * <SkipLinks
 *   links={[
 *     { label: "Skip to main content", targetId: "main-content" },
 *     { label: "Skip to navigation", targetId: "navigation" },
 *   ]}
 * />
 * ```
 */
export function SkipLinks({ links, show = true, className = "", ...props }: SkipLinksProps) {
  if (!show || links.length === 0) return null;

  const sortedLinks = [...links].sort((a, b) => (a.order || 0) - (b.order || 0));

  const handleClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const skipLinksClasses = ["skip-links", className].filter(Boolean).join(" ");

  return (
    <div className={skipLinksClasses} {...props}>
      {sortedLinks.map((link, index) => (
        <a
          key={index}
          href={`#${link.targetId}`}
          className="skip-link"
          onClick={(e) => {
            e.preventDefault();
            handleClick(link.targetId);
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default SkipLinks;
