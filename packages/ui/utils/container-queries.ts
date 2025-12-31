/**
 * Container query utilities (using CSS container queries)
 */

import { useEffect, RefObject } from "react";

export interface ContainerQueryConfig {
  /**
   * Container name
   */
  name?: string;
  /**
   * Container type
   */
  type?: "inline-size" | "block-size" | "size";
}

/**
 * Generate container query CSS
 */
export function createContainerQuery(
  selector: string,
  styles: string,
  config: ContainerQueryConfig = {},
): string {
  const { name, type = "inline-size" } = config;
  const containerName = name ? `container-name: ${name};` : "";
  const containerType = `container-type: ${type};`;

  return `
    ${selector} {
      ${containerName}
      ${containerType}
    }
    
    @container ${name ? `(${name})` : ""} {
      ${styles}
    }
  `;
}

/**
 * Container query hook (for JavaScript-based container queries)
 */
export function useContainerQuery(
  ref: RefObject<HTMLElement>,
  callback: (width: number, height: number) => void,
) {
  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        callback(width, height);
      }
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, callback]);
}
