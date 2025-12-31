import React from "react";
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";
import Button from "./Button";

export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Widget title
   */
  title?: string;
  /**
   * Widget description
   */
  description?: string;
  /**
   * Widget content
   */
  children: React.ReactNode;
  /**
   * Widget actions
   */
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: "solid" | "soft" | "outline" | "ghost";
  }>;
  /**
   * Show header
   */
  showHeader?: boolean;
  /**
   * Show footer
   */
  showFooter?: boolean;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Error state
   */
  error?: string;
}

/**
 * Widget component - Reusable dashboard widget wrapper
 *
 * @example
 * ```tsx
 * <Widget
 *   title="Sales Overview"
 *   description="Monthly sales data"
 *   actions={[{ label: "View Details", onClick: handleView }]}
 * >
 *   <Chart data={chartData} />
 * </Widget>
 * ```
 */
export function Widget({
  title,
  description,
  children,
  actions,
  showHeader = true,
  showFooter = false,
  loading = false,
  error,
  className = "",
  ...props
}: WidgetProps) {
  const widgetClasses = ["widget", className].filter(Boolean).join(" ");

  return (
    <Card className={widgetClasses} {...props}>
      {showHeader && (title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>
        {loading ? (
          <div className="widget-loading">Loading...</div>
        ) : error ? (
          <div className="widget-error">{error}</div>
        ) : (
          children
        )}
      </CardContent>
      {showFooter && actions && actions.length > 0 && (
        <CardFooter>
          {actions.map((action, index) => (
            <Button key={index} variant={action.variant || "outline"} onClick={action.onClick}>
              {action.label}
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}

export default Widget;
