"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export interface InstallPromptProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Show install prompt
   */
  show?: boolean;
  /**
   * Callback when install is accepted
   */
  onInstall?: () => void;
  /**
   * Callback when install is dismissed
   */
  onDismiss?: () => void;
  /**
   * Custom install button text
   */
  installButtonText?: string;
  /**
   * Custom dismiss button text
   */
  dismissButtonText?: string;
  /**
   * Custom title
   */
  title?: string;
  /**
   * Custom description
   */
  description?: string;
}

/**
 * PWA Install Prompt component
 *
 * @example
 * ```tsx
 * <InstallPrompt
 *   show={showPrompt}
 *   onInstall={handleInstall}
 *   onDismiss={handleDismiss}
 * />
 * ```
 */
export function InstallPrompt({
  show: controlledShow,
  onInstall,
  onDismiss,
  installButtonText = "Install",
  dismissButtonText = "Not now",
  title = "Install App",
  description = "Install this app on your device for a better experience.",
  className = "",
  ...props
}: InstallPromptProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [internalShow, setInternalShow] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      if (controlledShow === undefined) {
        setInternalShow(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, [controlledShow]);

  const show = controlledShow !== undefined ? controlledShow : internalShow;

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === "accepted") {
        onInstall?.();
      } else {
        onDismiss?.();
      }

      setDeferredPrompt(null);
      if (controlledShow === undefined) {
        setInternalShow(false);
      }
    }
  };

  const handleDismiss = () => {
    setDeferredPrompt(null);
    if (controlledShow === undefined) {
      setInternalShow(false);
    }
    onDismiss?.();
  };

  if (!show || !deferredPrompt) return null;

  const installPromptClasses = ["install-prompt", className].filter(Boolean).join(" ");

  return (
    <Card className={installPromptClasses} {...props}>
      <div className="install-prompt-content">
        <h3 className="install-prompt-title">{title}</h3>
        <p className="install-prompt-description">{description}</p>
        <div className="install-prompt-actions">
          <Button variant="solid" onClick={handleInstall}>
            {installButtonText}
          </Button>
          <Button variant="ghost" onClick={handleDismiss}>
            {dismissButtonText}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default InstallPrompt;
