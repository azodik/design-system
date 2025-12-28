import React, { createContext, useContext, useState, useRef, useEffect } from "react";

export interface AccordionContextValue {
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
  type: "single" | "multiple";
  collapsible: boolean;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  className?: string;
}

export interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
  className?: string;
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  value?: string;
  isOpen?: boolean;
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

const AccordionItemComponent: React.FC<AccordionItemProps> = ({
  children,
  value,
  disabled = false,
  className = "",
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const { value: currentValue, type } = context;
  // If disabled, never show as open
  const isOpen = disabled
    ? false
    : type === "single"
      ? currentValue === value
      : Array.isArray(currentValue) && currentValue.indexOf(value) !== -1;

  return (
    <div
      className={`accordion-item ${className} ${disabled ? "disabled" : ""}`}
      data-state={isOpen ? "open" : "closed"}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            value,
            disabled,
            isOpen,
          } as Partial<AccordionTriggerProps & AccordionContentProps>);
        }
        return child;
      })}
    </div>
  );
};

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className = "",
  disabled = false,
  value,
  isOpen,
  ...props
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionTrigger must be used within an Accordion");
  }

  const { onValueChange, type, collapsible } = context;

  const handleClick = () => {
    if (disabled) return;

    if (type === "single") {
      if (isOpen && !collapsible) return;
      onValueChange(isOpen ? "" : value || "");
    } else {
      const currentValue = Array.isArray(context.value) ? context.value : [];
      const newValue = isOpen
        ? currentValue.filter((v) => v !== value)
        : [...currentValue, value || ""];
      onValueChange(newValue);
    }
  };

  const getIcon = () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="accordion-icon"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <button
      className={`accordion-trigger ${className}`}
      onClick={handleClick}
      disabled={disabled}
      data-state={isOpen ? "open" : "closed"}
      type="button"
      aria-expanded={isOpen}
      {...props}
    >
      <span className="accordion-title">{children}</span>
      {getIcon()}
    </button>
  );
};

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className = "",
  isOpen,
  ...props
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen, children]);

  return (
    <div
      className={`accordion-content ${className}`}
      data-state={isOpen ? "open" : "closed"}
      style={{
        height: `${height}px`,
        overflow: "hidden",
      }}
      {...props}
    >
      <div ref={contentRef} className="accordion-content-inner">
        {children}
      </div>
    </div>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = AccordionItemComponent;
export { AccordionTrigger, AccordionContent };

export default function Accordion({
  children,
  type = "single",
  value,
  defaultValue,
  onValueChange,
  collapsible = true,
  className = "",
  ...props
}: AccordionProps) {
  const [internalValue, setInternalValue] = useState<string | string[]>(
    defaultValue || (type === "single" ? "" : []),
  );

  const currentValue = value !== undefined ? value : internalValue;

  const handleValueChange = (newValue: string | string[]) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const contextValue: AccordionContextValue = {
    value: currentValue,
    onValueChange: handleValueChange,
    type,
    collapsible,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={`accordion ${className}`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}
