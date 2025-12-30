'use client';

import React, { useState, forwardRef, createContext, useContext, useRef, useEffect, useCallback, useMemo } from 'react';
import { Box } from './Box';
import { Container } from './Container';
import { MenuIcon, XIcon } from '@azodik/icons';

interface NavbarContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
  closeMenu: () => void;
}

const NavbarContext = createContext<NavbarContextValue | undefined>(undefined);

const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) throw new Error('Navbar sub-components must be used within a Navbar');
  return context;
};

// Hook to detect mobile viewport
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
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
    const isMobile = useIsMobile();

    const closeMenu = useCallback(() => {
      setIsOpen(false);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
      if (isOpen && isMobile) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen, isMobile]);

    // Close menu on window resize to desktop
    useEffect(() => {
      if (!isMobile && isOpen) {
        setIsOpen(false);
      }
    }, [isMobile, isOpen]);

    // Handle click outside
    const handleClickOutside = useCallback((event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }, [isOpen]);

    useEffect(() => {
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }
    }, [isOpen, handleClickOutside]);

    // Close menu on escape key
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false);
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    const classNames = useMemo(() => [
      'az-Navbar',
      `az-${variant}`,
      isGlass ? 'az-glass' : '',
      className,
    ].filter(Boolean).join(' '), [variant, isGlass, className]);

    const contextValue = useMemo(() => ({
      isOpen,
      setIsOpen,
      isMobile,
      closeMenu,
    }), [isOpen, isMobile, closeMenu]);

    return (
      <NavbarContext.Provider value={contextValue}>
        <Box as="nav" className={classNames} ref={navRef} {...props}>
          <Container size={containerSize} className="az-Navbar-container">
            {children}
          </Container>
          {/* Mobile menu backdrop */}
          {isOpen && isMobile && (
            <Box
              className="az-Navbar-backdrop"
              onClick={closeMenu}
              style={{
                position: 'fixed',
                top: 'var(--navbar-height, 4.5rem)',
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                zIndex: 998,
                animation: 'fadeIn 0.3s ease-out',
              }}
            />
          )}
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
    <Box 
      id="navbar-content"
      className={`az-Navbar-content ${isOpen ? 'open' : ''} ${className}`}
      role="menu"
      aria-hidden={!isOpen}
      {...props}
    >
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
  hasSubmenu?: boolean;
}

const NavbarLink = ({ children, active, className = "", onClick, hasSubmenu, ...props }: NavbarLinkProps) => {
  const { closeMenu, isMobile } = useNavbar();
  
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile && !hasSubmenu) {
      closeMenu();
    }
    onClick?.(e);
  }, [isMobile, closeMenu, onClick, hasSubmenu]);

  return (
    <a 
      className={`az-Navbar-link ${active ? 'active' : ''} ${hasSubmenu ? 'has-submenu' : ''} ${className}`} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

interface NavbarSubmenuProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
}

const NavbarSubmenu = ({ title, icon, children, className = "", ...props }: NavbarSubmenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile, closeMenu } = useNavbar();

  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleSubmenuClick = useCallback((e: React.MouseEvent) => {
    if (isMobile) {
      closeMenu();
    }
  }, [isMobile, closeMenu]);

  return (
    <div className={`az-Navbar-submenu ${isOpen ? 'open' : ''} ${className}`} {...props}>
      <button
        className="az-Navbar-submenu-toggle"
        onClick={handleToggle}
        aria-expanded={isOpen}
        type="button"
      >
        {icon && <span className="az-Navbar-submenu-icon">{icon}</span>}
        <span className="az-Navbar-submenu-title">{title}</span>
        <span className="az-Navbar-submenu-chevron">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      <div className="az-Navbar-submenu-content" onClick={handleSubmenuClick}>
        {children}
      </div>
    </div>
  );
};

const NavbarActions = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Box className={`az-Navbar-actions ${className}`} {...props}>
    {children}
  </Box>
);

const NavbarToggle = ({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isOpen, setIsOpen } = useNavbar();
  
  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <button
      className={`az-Navbar-toggle ${className}`}
      onClick={handleToggle}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="navbar-content"
      {...props}
    >
      {isOpen ? (
        <XIcon 
          size={24} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'currentColor',
          }} 
        />
      ) : (
        <MenuIcon 
          size={24} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'currentColor',
          }} 
        />
      )}
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
  Submenu: typeof NavbarSubmenu;
};

NavbarRoot.Brand = NavbarBrand;
NavbarRoot.Content = NavbarContent;
NavbarRoot.Links = NavbarLinks;
NavbarRoot.Link = NavbarLink;
NavbarRoot.Actions = NavbarActions;
NavbarRoot.Toggle = NavbarToggle;
NavbarRoot.Submenu = NavbarSubmenu;

export type { NavbarProps, NavbarLinkProps, NavbarContextValue };
export type { NavbarSubmenuProps };
export { 
  NavbarRoot as Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarLinks,
  NavbarLink,
  NavbarActions,
  NavbarToggle,
  NavbarSubmenu
};
export default NavbarRoot;
