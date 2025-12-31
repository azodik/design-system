"use client";
import React, { useState } from "react";
import Button from "./Button";

export interface ShareData {
  /**
   * Title
   */
  title?: string;
  /**
   * Text
   */
  text?: string;
  /**
   * URL
   */
  url?: string;
  /**
   * Files (for Web Share API Level 2)
   */
  files?: File[];
}

export interface NativeShareProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onError"> {
  /**
   * Share data
   */
  data: ShareData;
  /**
   * Callback when share is successful
   */
  onSuccess?: () => void;
  /**
   * Callback when share is cancelled
   */
  onCancel?: () => void;
  /**
   * Callback when share fails
   */
  onError?: (error: Error) => void;
  /**
   * Button text
   */
  buttonText?: string;
  /**
   * Button variant
   */
  buttonVariant?: "solid" | "outline" | "ghost" | "soft" | "link";
  /**
   * Custom trigger element
   */
  trigger?: React.ReactNode;
}

/**
 * Native Share component - Web Share API component
 *
 * @example
 * ```tsx
 * <NativeShare
 *   data={{
 *     title: "Check this out!",
 *     text: "Amazing content",
 *     url: "https://example.com"
 *   }}
 *   onSuccess={() => console.log("Shared!")}
 * />
 * ```
 */
export function NativeShare({
  data,
  onSuccess,
  onCancel,
  onError,
  buttonText = "Share",
  buttonVariant = "solid",
  trigger,
  className = "",
  ...props
}: NativeShareProps) {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    if (!isNativeShareSupported()) {
      onError?.(new Error("Web Share API is not supported"));
      return;
    }

    setIsSharing(true);

    try {
      if (navigator.share) {
        await navigator.share(data);
        onSuccess?.();
      } else {
        throw new Error("Web Share API is not available");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        onCancel?.();
      } else {
        onError?.(error instanceof Error ? error : new Error("Share failed"));
      }
    } finally {
      setIsSharing(false);
    }
  };

  const shareButtonClasses = ["native-share", className].filter(Boolean).join(" ");

  if (trigger) {
    return (
      <div className={shareButtonClasses} {...props}>
        {React.isValidElement(trigger)
          ? React.cloneElement(
              trigger as React.ReactElement<{ onClick?: () => void; disabled?: boolean }>,
              {
                onClick: handleShare,
                disabled: isSharing,
              },
            )
          : trigger}
      </div>
    );
  }

  return (
    <div className={shareButtonClasses} {...props}>
      <Button
        variant={buttonVariant}
        onClick={handleShare}
        disabled={isSharing || !isNativeShareSupported()}
      >
        {buttonText}
      </Button>
    </div>
  );
}

/**
 * Check if native share is supported
 */
export function isNativeShareSupported(): boolean {
  return typeof navigator !== "undefined" && "share" in navigator;
}

export default NativeShare;
