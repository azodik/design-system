import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";

// Interfaces
export interface DrawerProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export interface DrawerTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export interface DrawerContentProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export interface DrawerHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface DrawerTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface DrawerDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export interface DrawerBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface DrawerFooterProps {
  children: React.ReactNode;
  className?: string;
}

// Context
interface DrawerContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer components must be used within a Drawer");
  }
  return context;
};

// Drawer Component
export const Drawer: React.FC<DrawerProps> = ({
  children,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  useEffect(() => {
    setMounted(true);
    if (!isControlled) {
      setInternalOpen(defaultOpen);
    }
  }, [defaultOpen, isControlled]);

  const setOpen = useCallback(
    (newOpen: boolean) => {
      if (isControlled) {
        onOpenChange?.(newOpen);
      } else {
        setInternalOpen(newOpen);
      }
    },
    [isControlled, onOpenChange],
  );

  const contextValue = useMemo(() => ({ open, setOpen }), [open, setOpen]);

  if (!mounted) {
    return null;
  }

  return <DrawerContext.Provider value={contextValue}>{children}</DrawerContext.Provider>;
};

// DrawerTrigger Component
export const DrawerTrigger: React.FC<DrawerTriggerProps> = ({
  children,
  asChild = false,
  className = "",
  ...props
}) => {
  const { setOpen } = useDrawerContext();

  const handleClick = () => {
    setOpen(true);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...(children.props as any),
      onClick: (e: React.MouseEvent) => {
        (children.props as any).onClick?.(e);
        handleClick();
      },
      className: `${(children.props as any).className || ""} ${className}`.trim(),
    });
  }

  return (
    <button className={`drawer-trigger ${className}`} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

// DrawerContent Component
export const DrawerContent: React.FC<DrawerContentProps> = ({
  children,
  className = "",
  onClose,
}) => {
  const { open, setOpen } = useDrawerContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsClosing(false);
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (open && typeof document !== "undefined") {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      }
    };
  }, [open, setOpen, onClose]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
      setShouldRender(false);
      onClose?.();
    }, 300); // Match animation duration
  }, [setOpen, onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose],
  );

  if (!shouldRender) return null;

  return (
    <div className="drawer-overlay" onClick={handleOverlayClick}>
      <div
        ref={contentRef}
        className={`drawer-content ${isClosing ? "closing" : ""} ${className}`}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

// DrawerHeader Component
export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ children, className = "" }) => {
  return (
    <div className={`drawer-header ${className}`}>
      <div className="drawer-header-content">{children}</div>
    </div>
  );
};

// DrawerTitle Component
export const DrawerTitle: React.FC<DrawerTitleProps> = ({ children, className = "" }) => {
  return (
    <h2 className={`drawer-title ${className}`} id="drawer-title">
      {children}
    </h2>
  );
};

// DrawerDescription Component
export const DrawerDescription: React.FC<DrawerDescriptionProps> = ({
  children,
  className = "",
}) => {
  return (
    <p className={`drawer-description ${className}`} id="drawer-description">
      {children}
    </p>
  );
};

// DrawerBody Component
export const DrawerBody: React.FC<DrawerBodyProps> = ({ children, className = "" }) => {
  return <div className={`drawer-body ${className}`}>{children}</div>;
};

// DrawerFooter Component
export const DrawerFooter: React.FC<DrawerFooterProps> = ({ children, className = "" }) => {
  return <div className={`drawer-footer ${className}`}>{children}</div>;
};

// Close Button Component
export const DrawerClose: React.FC<{
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  asChild?: boolean;
}> = ({ children, className = "", onClick, asChild = false }) => {
  const { setOpen } = useDrawerContext();

  const handleClick = () => {
    // Find the drawer content and trigger closing animation
    const drawerContent = document.querySelector(".drawer-content");
    if (drawerContent) {
      drawerContent.classList.add("closing");
      setTimeout(() => {
        setOpen(false);
        drawerContent.classList.remove("closing");
        onClick?.();
      }, 300);
    } else {
      setOpen(false);
      onClick?.();
    }
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...(children.props as any),
      onClick: (e: React.MouseEvent) => {
        (children.props as any).onClick?.(e);
        handleClick();
      },
      className: `${(children.props as any).className || ""} ${className}`.trim(),
    });
  }

  return (
    <button className={`drawer-close ${className}`} onClick={handleClick} aria-label="Close drawer">
      {children || (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )}
    </button>
  );
};

// Default export
export default Drawer;
