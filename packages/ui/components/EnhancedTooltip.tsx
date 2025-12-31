"use client";
import React, { useState, useEffect, useRef } from "react";

export interface TooltipStep {
  /**
   * Step ID
   */
  id: string;
  /**
   * Step content
   */
  content: React.ReactNode;
  /**
   * Step title (optional)
   */
  title?: string;
  /**
   * Target element selector
   */
  target: string;
}

export interface EnhancedTooltipProps {
  /**
   * Tooltip steps
   */
  steps: TooltipStep[];
  /**
   * Current step index
   */
  currentStep?: number;
  /**
   * Callback when step changes
   */
  onStepChange?: (stepIndex: number) => void;
  /**
   * Show tooltip
   */
  show?: boolean;
  /**
   * Callback when tooltip is dismissed
   */
  onDismiss?: () => void;
  /**
   * Show navigation buttons
   */
  showNavigation?: boolean;
  /**
   * Show progress indicator
   */
  showProgress?: boolean;
}

/**
 * Enhanced Tooltip component - Tooltip with steps
 *
 * @example
 * ```tsx
 * <EnhancedTooltip
 *   steps={tooltipSteps}
 *   currentStep={currentStep}
 *   onStepChange={setCurrentStep}
 *   showNavigation
 *   showProgress
 * />
 * ```
 */
export function EnhancedTooltip({
  steps,
  currentStep: controlledStep,
  onStepChange,
  show = true,
  onDismiss,
  showNavigation = true,
  showProgress = true,
}: EnhancedTooltipProps) {
  const [internalStep, setInternalStep] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const currentStep = controlledStep !== undefined ? controlledStep : internalStep;

  useEffect(() => {
    if (show && steps.length > 0 && currentStep < steps.length) {
      const step = steps[currentStep];
      const element = document.querySelector(step.target) as HTMLElement;
      // Use requestAnimationFrame to avoid synchronous setState in effect
      requestAnimationFrame(() => {
        setTargetElement(element);
      });
    } else {
      // Use requestAnimationFrame to avoid synchronous setState in effect
      requestAnimationFrame(() => {
        setTargetElement(null);
      });
    }
  }, [show, steps, currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      if (controlledStep === undefined) {
        setInternalStep(newStep);
      }
      onStepChange?.(newStep);
    } else {
      onDismiss?.();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const newStep = currentStep - 1;
      if (controlledStep === undefined) {
        setInternalStep(newStep);
      }
      onStepChange?.(newStep);
    }
  };

  const handleDismiss = () => {
    onDismiss?.();
  };

  useEffect(() => {
    if (!targetElement || !tooltipRef.current) return;

    const updatePosition = () => {
      if (targetElement && tooltipRef.current) {
        const rect = targetElement.getBoundingClientRect();
        tooltipRef.current.style.left = `${rect.left + rect.width / 2}px`;
        tooltipRef.current.style.top = `${rect.bottom + 8}px`;
        tooltipRef.current.style.transform = "translateX(-50%)";
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [targetElement]);

  if (!show || steps.length === 0 || currentStep >= steps.length || !targetElement) return null;

  const step = steps[currentStep];

  const tooltipContent = (
    <div className="enhanced-tooltip">
      {step.title && <div className="enhanced-tooltip-title">{step.title}</div>}
      <div className="enhanced-tooltip-content">{step.content}</div>
      {(showProgress || showNavigation) && (
        <div className="enhanced-tooltip-footer">
          {showProgress && (
            <div className="enhanced-tooltip-progress">
              {currentStep + 1} / {steps.length}
            </div>
          )}
          {showNavigation && (
            <div className="enhanced-tooltip-navigation">
              {currentStep > 0 && (
                <button type="button" className="enhanced-tooltip-button" onClick={handlePrevious}>
                  Previous
                </button>
              )}
              <button
                type="button"
                className="enhanced-tooltip-button"
                onClick={currentStep < steps.length - 1 ? handleNext : handleDismiss}
              >
                {currentStep < steps.length - 1 ? "Next" : "Done"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div
      ref={tooltipRef}
      className="enhanced-tooltip-wrapper"
      style={{
        position: "fixed",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      {tooltipContent}
    </div>
  );
}

export default EnhancedTooltip;
