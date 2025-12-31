"use client";
import React, { useState, useEffect, useRef } from "react";
import { Popover } from "./Popover";
import Button from "./Button";

export interface FeatureHighlightProps {
  /**
   * Target element selector or ref
   */
  target: string | React.RefObject<HTMLElement>;
  /**
   * Highlight title
   */
  title: string;
  /**
   * Highlight description
   */
  description: string;
  /**
   * Show highlight
   */
  show?: boolean;
  /**
   * Callback when highlight is dismissed
   */
  onDismiss?: () => void;
  /**
   * Position of highlight
   */
  position?: "top" | "bottom" | "left" | "right";
  /**
   * Show dismiss button
   */
  showDismiss?: boolean;
}

/**
 * Feature Highlight component - Spotlight on new features
 *
 * @example
 * ```tsx
 * <FeatureHighlight
 *   target="#new-feature"
 *   title="New Feature!"
 *   description="Check out this new feature"
 *   show={showHighlight}
 *   onDismiss={() => setShowHighlight(false)}
 * />
 * ```
 */
export function FeatureHighlight({
  target,
  title,
  description,
  show = true,
  onDismiss,
  position = "bottom",
  showDismiss = true,
}: FeatureHighlightProps) {
  const [isOpen, setIsOpen] = useState(show);
  const [hasTarget, setHasTarget] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof target === "string") {
      const element = document.querySelector(target) as HTMLElement;
      targetRef.current = element;
      setHasTarget(!!element);
    } else if (target?.current) {
      targetRef.current = target.current;
      setHasTarget(!!target.current);
    } else {
      setHasTarget(false);
    }
  }, [target]);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  useEffect(() => {
    if (targetRef.current && triggerRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      triggerRef.current.style.position = "absolute";
      triggerRef.current.style.left = `${rect.left}px`;
      triggerRef.current.style.top = `${rect.top}px`;
      triggerRef.current.style.width = `${rect.width}px`;
      triggerRef.current.style.height = `${rect.height}px`;
      triggerRef.current.style.pointerEvents = "none";
    }
  }, [isOpen, hasTarget]);

  if (!hasTarget || !isOpen) return null;

  const handleDismiss = () => {
    setIsOpen(false);
    onDismiss?.();
  };

  const highlightContent = (
    <div className="feature-highlight">
      <div className="feature-highlight-header">
        <h3 className="feature-highlight-title">{title}</h3>
        {showDismiss && (
          <button
            type="button"
            className="feature-highlight-close"
            onClick={handleDismiss}
            aria-label="Dismiss"
          >
            ×
          </button>
        )}
      </div>
      <p className="feature-highlight-description">{description}</p>
      {showDismiss && (
        <div className="feature-highlight-actions">
          <Button size="sm" onClick={handleDismiss}>
            Got it
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <Popover isOpen={isOpen} onClose={handleDismiss} content={highlightContent} position={position}>
      <div ref={triggerRef} />
    </Popover>
  );
}

export default FeatureHighlight;
