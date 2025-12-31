import React from "react";

export interface StepperStep {
  /**
   * Step label
   */
  label: string;
  /**
   * Step description (optional)
   */
  description?: string;
  /**
   * Step is completed
   */
  completed?: boolean;
  /**
   * Step is active
   */
  active?: boolean;
  /**
   * Step is disabled
   */
  disabled?: boolean;
  /**
   * Custom step content
   */
  content?: React.ReactNode;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Steps configuration
   */
  steps: StepperStep[];
  /**
   * Current active step index
   */
  activeStep?: number;
  /**
   * Orientation
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Show step numbers
   */
  showNumbers?: boolean;
  /**
   * Alternative label (show labels below steps)
   */
  alternativeLabel?: boolean;
  /**
   * Callback when step is clicked
   */
  onStepClick?: (index: number) => void;
}

/**
 * Stepper component for multi-step processes
 *
 * @example
 * ```tsx
 * <Stepper
 *   steps={[
 *     { label: "Step 1", completed: true },
 *     { label: "Step 2", active: true },
 *     { label: "Step 3" },
 *   ]}
 *   activeStep={1}
 * />
 * ```
 */
export function Stepper({
  steps,
  activeStep,
  orientation = "horizontal",
  showNumbers = true,
  alternativeLabel = false,
  onStepClick,
  className = "",
  ...props
}: StepperProps) {
  const stepperClasses = [
    "stepper",
    `stepper-${orientation}`,
    alternativeLabel && "stepper-alternative-label",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={stepperClasses} {...props}>
      {steps.map((step, index) => {
        const isActive = activeStep === index || step.active;
        const isCompleted = step.completed || (activeStep !== undefined && index < activeStep);
        const isDisabled = step.disabled;

        const stepClasses = [
          "stepper-step",
          isActive && "stepper-step-active",
          isCompleted && "stepper-step-completed",
          isDisabled && "stepper-step-disabled",
        ]
          .filter(Boolean)
          .join(" ");

        const handleClick = () => {
          if (!isDisabled && onStepClick) {
            onStepClick(index);
          }
        };

        return (
          <div
            key={index}
            className={stepClasses}
            onClick={handleClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Step ${index + 1}: ${step.label}${step.description ? ` - ${step.description}` : ""}`}
          >
            <div className="stepper-step-connector" />
            <div className="stepper-step-content">
              {showNumbers && (
                <div className="stepper-step-number">{isCompleted ? "✓" : index + 1}</div>
              )}
              <div className="stepper-step-label-container">
                <div className="stepper-step-label">{step.label}</div>
                {step.description && (
                  <div className="stepper-step-description">{step.description}</div>
                )}
              </div>
            </div>
            {step.content && <div className="stepper-step-custom-content">{step.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default Stepper;
