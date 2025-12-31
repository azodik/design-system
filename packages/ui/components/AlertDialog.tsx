import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./Dialog";
import Button from "./Button";
import type { SemanticSize } from "../utils/size-variant-mapping";
import { mapSemanticToNumeric } from "../utils/size-variant-mapping";

export interface AlertDialogAction {
  /**
   * Action label
   */
  label: string;
  /**
   * Action callback
   */
  onClick: () => void;
  /**
   * Button variant
   */
  variant?: "solid" | "soft" | "outline" | "ghost";
  /**
   * Button color
   */
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  /**
   * Destructive action (typically red)
   */
  destructive?: boolean;
}

export interface AlertDialogProps {
  /**
   * Dialog open state
   */
  open?: boolean;
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Dialog title
   */
  title: string;
  /**
   * Dialog description
   */
  description?: string;
  /**
   * Cancel action
   */
  cancelAction?: AlertDialogAction;
  /**
   * Confirm/primary action
   */
  confirmAction: AlertDialogAction;
  /**
   * Show cancel button (default: true)
   */
  showCancel?: boolean;
  /**
   * Size variant
   */
  size?: SemanticSize;
  /**
   * Children (custom content)
   */
  children?: React.ReactNode;
}

/**
 * Alert Dialog component for confirmations and important actions
 *
 * @example
 * ```tsx
 * <AlertDialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Delete Item"
 *   description="Are you sure you want to delete this item? This action cannot be undone."
 *   confirmAction={{
 *     label: "Delete",
 *     onClick: handleDelete,
 *     destructive: true,
 *   }}
 * />
 * ```
 */
export function AlertDialog({
  open,
  onOpenChange,
  title,
  description,
  cancelAction,
  confirmAction,
  showCancel = true,
  size = "md",
  children,
}: AlertDialogProps) {
  const handleCancel = () => {
    cancelAction?.onClick();
    onOpenChange?.(false);
  };

  const handleConfirm = () => {
    confirmAction.onClick();
    onOpenChange?.(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`alert-dialog-content alert-dialog-size-${mapSemanticToNumeric(size)}`}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children && <div className="alert-dialog-body">{children}</div>}
        <DialogFooter className="alert-dialog-footer">
          {showCancel && (
            <Button variant={cancelAction?.variant || "outline"} onClick={handleCancel}>
              {cancelAction?.label || "Cancel"}
            </Button>
          )}
          <Button
            variant={confirmAction.variant || "solid"}
            color={confirmAction.destructive ? "ruby" : confirmAction.color || "azodik"}
            onClick={handleConfirm}
          >
            {confirmAction.label}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AlertDialog;
