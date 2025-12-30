'use client';

import React, { useState, forwardRef, createContext, useContext, useRef, useEffect } from 'react';
import { Box } from './Box';
import { Container } from './Container';
import { MenuIcon, XIcon } from '@azodik/icons';

interface NavbarContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
}

const NavbarContext = createContext<NavbarContextValue | undefined>(undefined);

const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) throw new Error('Navbar sub-components must be used within a Navbar');
  return context;
};

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'sticky' | 'fixed' | 'floating';
  isGlass?: boolean;
  containerSize?: "1" | "2" | "3" | "4";
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ children, variant = 'sticky', isGlass = true, containerSize = "4", className = "", ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const internalRef = useRef<HTMLDivElement>(null);
    const navRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    const classNames = [
      'az-Navbar',
      `az-${variant}`,
      isGlass ? 'az-glass' : '',
      className,
    ].filter(Boolean).join(' ');

    return (
      <NavbarContext.Provider value={{ isOpen, setIsOpen, isMobile: false }}>
        <Box as="nav" className={classNames} ref={navRef} {...props}>
          <Container size={containerSize} className="az-Navbar-container">
            {children}
          </Container>
        </Box>
      </NavbarContext.Provider>
    );
  }
);

const NavbarBrand = ({ children, className = "", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={`az-Navbar-brand ${className}`} {...props}>
    {children}
  </a>
);

const NavbarContent = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { isOpen } = useNavbar();
  return (
    <Box className={`az-Navbar-content ${isOpen ? 'open' : ''} ${className}`} {...props}>
      {children}
    </Box>
  );
};

const NavbarLinks = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className={`az-Navbar-links ${className}`} {...props}>
    {children}
  </ul>
);

interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const NavbarLink = ({ children, active, className = "", ...props }: NavbarLinkProps) => (
  <a className={`az-Navbar-link ${active ? 'active' : ''} ${className}`} {...props}>
    {children}
  </a>
);

const NavbarActions = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Box className={`az-Navbar-actions ${className}`} {...props}>
    {children}
  </Box>
);

const NavbarToggle = ({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isOpen, setIsOpen } = useNavbar();
  return (
    <button
      className={`az-Navbar-toggle ${className}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle navigation"
      {...props}
    >
      {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
    </button>
  );
};

// Sub-component assignments for dot notation
const NavbarRoot = Navbar as typeof Navbar & {
  Brand: typeof NavbarBrand;
  Content: typeof NavbarContent;
  Links: typeof NavbarLinks;
  Link: typeof NavbarLink;
  Actions: typeof NavbarActions;
  Toggle: typeof NavbarToggle;
};

NavbarRoot.Brand = NavbarBrand;
NavbarRoot.Content = NavbarContent;
NavbarRoot.Links = NavbarLinks;
NavbarRoot.Link = NavbarLink;
NavbarRoot.Actions = NavbarActions;
NavbarRoot.Toggle = NavbarToggle;

export type { NavbarProps, NavbarLinkProps, NavbarContextValue };
export { 
  NavbarRoot as Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarLinks,
  NavbarLink,
  NavbarActions,
  NavbarToggle
};
export default NavbarRoot;
