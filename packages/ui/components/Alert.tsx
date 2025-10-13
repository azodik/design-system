import React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "success" | "warning" | "error" | "info";
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  padding?: string | number;
  width?: string | number;
  height?: string | number;
}

export default function Alert({
  children,
  variant = "info",
  title,
  icon,
  onClose,
  padding,
  width,
  height,
  className = "",
  ...props
}: AlertProps) {
  const getIcon = () => {
    if (icon) return icon;

    switch (variant) {
      case "success":
        return "✓";
      case "warning":
        return "⚠";
      case "error":
        return "✕";
      case "info":
      default:
        return "ℹ";
    }
  };

  const alertStyle: React.CSSProperties = {
    ...(padding && { padding: typeof padding === "number" ? `${padding}px` : padding }),
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && { height: typeof height === "number" ? `${height}px` : height }),
    ...props.style,
  };

  return (
    <div className={`alert alert-${variant} ${className}`} style={alertStyle} {...props}>
      {icon !== null && <div className="alert-icon">{getIcon()}</div>}
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>
      {onClose && (
        <button type="button" className="alert-close" onClick={onClose} aria-label="Close alert">
          ×
        </button>
      )}
    </div>
  );
}
