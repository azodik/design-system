/**
 * Service Worker utilities - Offline support utilities
 */

export interface ServiceWorkerConfig {
  /**
   * Service worker script path
   */
  scriptPath: string;
  /**
   * Scope for service worker
   */
  scope?: string;
  /**
   * Update check interval (ms)
   */
  updateCheckInterval?: number;
  /**
   * Callback when update is available
   */
  onUpdateAvailable?: () => void;
  /**
   * Callback when update is installed
   */
  onUpdateInstalled?: () => void;
}

export interface ServiceWorkerState {
  /**
   * Service worker is registered
   */
  isRegistered: boolean;
  /**
   * Service worker is installing
   */
  isInstalling: boolean;
  /**
   * Service worker is waiting
   */
  isWaiting: boolean;
  /**
   * Service worker is active
   */
  isActive: boolean;
  /**
   * Update is available
   */
  updateAvailable: boolean;
}

/**
 * Check if service workers are supported
 */
export function isServiceWorkerSupported(): boolean {
  return typeof navigator !== "undefined" && "serviceWorker" in navigator;
}

/**
 * Register service worker
 */
export async function registerServiceWorker(
  config: ServiceWorkerConfig,
): Promise<ServiceWorkerRegistration> {
  if (!isServiceWorkerSupported()) {
    throw new Error("Service Workers are not supported");
  }

  try {
    const registration = await navigator.serviceWorker.register(config.scriptPath, {
      scope: config.scope,
    });

    // Check for updates periodically
    if (config.updateCheckInterval) {
      setInterval(() => {
        registration.update();
      }, config.updateCheckInterval);
    }

    // Listen for updates
    registration.addEventListener("updatefound", () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            config.onUpdateAvailable?.();
          } else if (newWorker.state === "activated") {
            config.onUpdateInstalled?.();
          }
        });
      }
    });

    return registration;
  } catch (error) {
    throw new Error(
      `Service Worker registration failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

/**
 * Unregister service worker
 */
export async function unregisterServiceWorker(): Promise<boolean> {
  if (!isServiceWorkerSupported()) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    return await registration.unregister();
  } catch (error) {
    console.error("Failed to unregister service worker:", error);
    return false;
  }
}

/**
 * Get service worker registration
 */
export async function getServiceWorkerRegistration(): Promise<ServiceWorkerRegistration | null> {
  if (!isServiceWorkerSupported()) {
    return null;
  }

  try {
    return await navigator.serviceWorker.ready;
  } catch (error) {
    console.error("Failed to get service worker registration:", error);
    return null;
  }
}

/**
 * Get service worker state
 */
export async function getServiceWorkerState(): Promise<ServiceWorkerState> {
  if (!isServiceWorkerSupported()) {
    return {
      isRegistered: false,
      isInstalling: false,
      isWaiting: false,
      isActive: false,
      updateAvailable: false,
    };
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const installing = registration.installing;
    const waiting = registration.waiting;
    const active = registration.active;

    return {
      isRegistered: true,
      isInstalling: installing !== null,
      isWaiting: waiting !== null,
      isActive: active !== null,
      updateAvailable: waiting !== null && navigator.serviceWorker.controller !== null,
    };
  } catch {
    return {
      isRegistered: false,
      isInstalling: false,
      isWaiting: false,
      isActive: false,
      updateAvailable: false,
    };
  }
}

/**
 * Update service worker
 */
export async function updateServiceWorker(): Promise<void> {
  if (!isServiceWorkerSupported()) {
    throw new Error("Service Workers are not supported");
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    await registration.update();
  } catch (error) {
    throw new Error(
      `Service Worker update failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

/**
 * Skip waiting for service worker
 */
export async function skipServiceWorkerWaiting(): Promise<void> {
  if (!isServiceWorkerSupported()) {
    throw new Error("Service Workers are not supported");
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const waiting = registration.waiting;
    if (waiting) {
      waiting.postMessage({ type: "SKIP_WAITING" });
    }
  } catch (error) {
    throw new Error(
      `Failed to skip waiting: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

/**
 * React hook for service worker
 */
import { useState, useEffect } from "react";

export function useServiceWorker(config: ServiceWorkerConfig) {
  const [state, setState] = useState<ServiceWorkerState>({
    isRegistered: false,
    isInstalling: false,
    isWaiting: false,
    isActive: false,
    updateAvailable: false,
  });
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!isServiceWorkerSupported()) {
      // Use requestAnimationFrame to avoid synchronous setState in effect
      requestAnimationFrame(() => {
        setError(new Error("Service Workers are not supported"));
      });
      return;
    }

    let mounted = true;

    const register = async () => {
      try {
        const reg = await registerServiceWorker(config);
        if (mounted) {
          setRegistration(reg);
          const currentState = await getServiceWorkerState();
          setState(currentState);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error("Registration failed"));
        }
      }
    };

    register();

    // Listen for controller changes
    const handleControllerChange = () => {
      if (mounted) {
        getServiceWorkerState().then(setState);
      }
    };

    navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange);

    return () => {
      mounted = false;
      navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
    };
  }, [config]);

  const update = async () => {
    try {
      await updateServiceWorker();
      const currentState = await getServiceWorkerState();
      setState(currentState);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Update failed"));
    }
  };

  const skipWaiting = async () => {
    try {
      await skipServiceWorkerWaiting();
      const currentState = await getServiceWorkerState();
      setState(currentState);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Skip waiting failed"));
    }
  };

  return {
    state,
    registration,
    error,
    update,
    skipWaiting,
    isSupported: isServiceWorkerSupported(),
  };
}
