"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Popover } from "./Popover";
import Button from "./Button";

export interface TourStep {
  /**
   * Step ID
   */
  id: string;
  /**
   * Step title
   */
  title: string;
  /**
   * Step content/description
   */
  content: React.ReactNode;
  /**
   * Target element selector
   */
  target?: string;
  /**
   * Step position relative to target
   */
  position?: "top" | "bottom" | "left" | "right";
  /**
   * Custom action buttons
   */
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: "solid" | "soft" | "outline" | "ghost";
  }>;
}

export interface TourProps {
  /**
   * Tour steps
   */
  steps: TourStep[];
  /**
   * Tour is active
   */
  isActive?: boolean;
  /**
   * Callback when tour starts
   */
  onStart?: () => void;
  /**
   * Callback when tour ends
   */
  onEnd?: () => void;
  /**
   * Callback when step changes
   */
  onStepChange?: (stepIndex: number) => void;
  /**
   * Show skip button
   */
  showSkip?: boolean;
  /**
   * Show progress indicator
   */
  showProgress?: boolean;
  /**
   * Close on overlay click
   */
  closeOnOverlayClick?: boolean;
}

/**
 * Tour component for product tours and onboarding
 *
 * @example
 * ```tsx
 * <Tour
 *   steps={[
 *     { id: "1", title: "Welcome", content: "This is a tour", target: "#element1" },
 *     { id: "2", title: "Next Step", content: "Continue here", target: "#element2" },
 *   ]}
 *   isActive={showTour}
 *   onEnd={() => setShowTour(false)}
 * />
 * ```
 */
export function Tour({
  steps,
  isActive = false,
  onStart,
  onEnd,
  onStepChange,
  showSkip = true,
  showProgress = true,
  closeOnOverlayClick = true,
}: TourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const updateTargetElement = useCallback((step: TourStep) => {
    // Use requestAnimationFrame to avoid synchronous setState
    requestAnimationFrame(() => {
      if (step.target) {
        const element = document.querySelector(step.target) as HTMLElement;
        setTargetElement(element);
      } else {
        setTargetElement(null);
      }
    });
  }, []);

  const handleEnd = useCallback(() => {
    setCurrentStep(0);
    setTargetElement(null);
    onEnd?.();
  }, [onEnd]);

  useEffect(() => {
    if (!isActive || steps.length === 0) return;

    onStart?.();
    updateTargetElement(steps[0]);

    return () => {
      onEnd?.();
    };
  }, [isActive, steps, onStart, onEnd, updateTargetElement]);

  useEffect(() => {
    if (!isActive) return;

    const step = steps[currentStep];
    if (step) {
      updateTargetElement(step);
      onStepChange?.(currentStep);
    }
  }, [currentStep, isActive, steps, onStepChange, updateTargetElement]);

  const handleNext = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleEnd();
    }
  }, [currentStep, steps.length, handleEnd]);

  const handlePrevious = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const handleSkip = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === overlayRef.current) {
        handleEnd();
      }
    },
    [closeOnOverlayClick, handleEnd],
  );

  if (!isActive || steps.length === 0) return null;

  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  const tourContent = (
    <div className="tour-content">
      {showProgress && (
        <div className="tour-progress">
          Step {currentStep + 1} of {steps.length}
        </div>
      )}
      <div className="tour-header">
        <h3 className="tour-title">{step.title}</h3>
        {showSkip && (
          <button type="button" className="tour-skip" onClick={handleSkip}>
            Skip
          </button>
        )}
      </div>
      <div className="tour-body">{step.content}</div>
      <div className="tour-footer">
        <div className="tour-actions">
          {!isFirst && (
            <Button variant="outline" onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {step.actions ? (
            step.actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "solid"}
                onClick={() => {
                  action.onClick();
                  if (step.actions && index === step.actions.length - 1) {
                    handleNext();
                  }
                }}
              >
                {action.label}
              </Button>
            ))
          ) : (
            <Button variant="solid" onClick={handleNext}>
              {isLast ? "Finish" : "Next"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {targetElement && (
        <Popover
          isOpen={true}
          onClose={handleEnd}
          content={tourContent}
          position={step.position || "bottom"}
        >
          <div
            style={{
              position: "absolute",
              top: targetElement.offsetTop,
              left: targetElement.offsetLeft,
              width: targetElement.offsetWidth,
              height: targetElement.offsetHeight,
            }}
          />
        </Popover>
      )}
      <div
        ref={overlayRef}
        className="tour-overlay"
        role="button"
        tabIndex={0}
        aria-label="Close tour"
        onClick={handleOverlayClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
            e.preventDefault();
            handleOverlayClick(e as unknown as React.MouseEvent);
          }
        }}
        style={{ display: targetElement ? "block" : "none" }}
      />
    </>
  );
}

export default Tour;
