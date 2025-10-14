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
export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

// Context
interface DialogContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used within a Dialog");
  }
  return context;
};

// Dialog Component
export const Dialog: React.FC<DialogProps> = ({
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

  return <DialogContext.Provider value={contextValue}>{children}</DialogContext.Provider>;
};

// DialogTrigger Component
export const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  asChild = false,
  className = "",
  ...props
}) => {
  const { setOpen } = useDialogContext();

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
    <button className={`dialog-trigger ${className}`} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

// DialogContent Component
export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  className = "",
  onClose,
}) => {
  const { open, setOpen } = useDialogContext();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        onClose?.();
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

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
      onClose?.();
    }
  };

  if (!open) return null;

  return (
    <div className="dialog-overlay" onClick={handleOverlayClick}>
      <div
        ref={contentRef}
        className={`dialog-content ${className}`}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

// DialogHeader Component
export const DialogHeader: React.FC<DialogHeaderProps> = ({ children, className = "" }) => {
  return (
    <div className={`dialog-header ${className}`}>
      <div className="dialog-header-content">{children}</div>
    </div>
  );
};

// DialogTitle Component
export const DialogTitle: React.FC<DialogTitleProps> = ({ children, className = "" }) => {
  return (
    <h2 className={`dialog-title ${className}`} id="dialog-title">
      {children}
    </h2>
  );
};

// DialogDescription Component
export const DialogDescription: React.FC<DialogDescriptionProps> = ({
  children,
  className = "",
}) => {
  return (
    <p className={`dialog-description ${className}`} id="dialog-description">
      {children}
    </p>
  );
};

// DialogBody Component
export const DialogBody: React.FC<DialogBodyProps> = ({ children, className = "" }) => {
  return <div className={`dialog-body ${className}`}>{children}</div>;
};

// DialogFooter Component
export const DialogFooter: React.FC<DialogFooterProps> = ({ children, className = "" }) => {
  return <div className={`dialog-footer ${className}`}>{children}</div>;
};

// Close Button Component
export const DialogClose: React.FC<{
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = "", onClick }) => {
  const { setOpen } = useDialogContext();

  const handleClick = () => {
    setOpen(false);
    onClick?.();
  };

  return (
    <button className={`dialog-close ${className}`} onClick={handleClick} aria-label="Close dialog">
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
export default Dialog;
