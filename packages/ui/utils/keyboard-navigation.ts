/**
 * Keyboard Navigation utilities - Full keyboard support
 */

export type KeyboardKey =
  | "Enter"
  | "Escape"
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Home"
  | "End"
  | "PageUp"
  | "PageDown"
  | "Tab"
  | "Space"
  | "Backspace"
  | "Delete";

/**
 * Check if key matches
 */
export function isKey(key: KeyboardKey, event: KeyboardEvent | React.KeyboardEvent): boolean {
  if (key === "Space") {
    return event.key === " " || event.key === "Spacebar";
  }
  return event.key === key;
}

/**
 * Check if modifier key is pressed
 */
export function hasModifierKey(
  event: KeyboardEvent | React.KeyboardEvent,
  modifier: "ctrl" | "shift" | "alt" | "meta",
): boolean {
  switch (modifier) {
    case "ctrl":
      return event.ctrlKey;
    case "shift":
      return event.shiftKey;
    case "alt":
      return event.altKey;
    case "meta":
      return event.metaKey;
  }
}

/**
 * Get next index in list (circular)
 */
export function getNextIndex(currentIndex: number, length: number, circular = true): number {
  if (currentIndex >= length - 1) {
    return circular ? 0 : length - 1;
  }
  return currentIndex + 1;
}

/**
 * Get previous index in list (circular)
 */
export function getPreviousIndex(currentIndex: number, length: number, circular = true): number {
  if (currentIndex <= 0) {
    return circular ? length - 1 : 0;
  }
  return currentIndex - 1;
}

/**
 * Handle arrow key navigation
 */
export function handleArrowKeyNavigation(
  event: KeyboardEvent | React.KeyboardEvent,
  currentIndex: number,
  length: number,
  onNavigate: (index: number) => void,
  orientation: "horizontal" | "vertical" = "vertical",
): void {
  if (orientation === "vertical") {
    if (isKey("ArrowUp", event)) {
      event.preventDefault();
      onNavigate(getPreviousIndex(currentIndex, length));
    } else if (isKey("ArrowDown", event)) {
      event.preventDefault();
      onNavigate(getNextIndex(currentIndex, length));
    }
  } else {
    if (isKey("ArrowLeft", event)) {
      event.preventDefault();
      onNavigate(getPreviousIndex(currentIndex, length));
    } else if (isKey("ArrowRight", event)) {
      event.preventDefault();
      onNavigate(getNextIndex(currentIndex, length));
    }
  }
}

/**
 * Handle home/end key navigation
 */
export function handleHomeEndNavigation(
  event: KeyboardEvent | React.KeyboardEvent,
  length: number,
  onNavigate: (index: number) => void,
): void {
  if (isKey("Home", event)) {
    event.preventDefault();
    onNavigate(0);
  } else if (isKey("End", event)) {
    event.preventDefault();
    onNavigate(length - 1);
  }
}
