import { useEffect, useRef } from "react";

export function useFocusTrap(isActive: boolean) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const element = ref.current;
    if (!element) return;

    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      handleTabKey(e);
    };

    element.addEventListener("keydown", handleKeyDown);

    // Focus the first element when activated
    if (firstElement) {
      // small timeout to allow potentially unmounting/remounting
      requestAnimationFrame(() => firstElement.focus());
    }

    return () => {
      element.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive]);

  return ref;
}
