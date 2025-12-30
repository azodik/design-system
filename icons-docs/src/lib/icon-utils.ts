import { toPng, toSvg } from "html-to-image";
import type { IconMetadata, DownloadOptions } from "@/types/icon";
import { getIconComponent } from "./icon-loader";

export function extractIconMetadata(iconName: string): IconMetadata | null {
  try {
    const IconComponent = getIconComponent(iconName);
    if (!IconComponent) return null;

    return {
      viewBox: "0 0 24 24",
      paths: [],
      fill: "currentColor",
    };
  } catch {
    return null;
  }
}

/**
 * Downloads the given element as an SVG file.
 * Note: The style option is captured from the preview element's rendered state.
 */
export async function downloadSVG(
  element: HTMLElement,
  filename: string,
  options?: DownloadOptions,
): Promise<void> {
  try {
    const dataUrl = await toSvg(element, {
      backgroundColor: "transparent",
      cacheBust: true,
    });
    const link = document.createElement("a");
    // Include style in filename if provided
    const styleSuffix = options?.style && options.style !== "solid" ? `-${options.style}` : "";
    link.download = `${filename}${styleSuffix}.svg`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Failed to download SVG:", error);
    throw error;
  }
}

/**
 * Downloads the given element as a PNG file.
 * Note: The style option is captured from the preview element's rendered state.
 */
export async function downloadPNG(
  element: HTMLElement,
  filename: string,
  options?: DownloadOptions,
): Promise<void> {
  try {
    const dataUrl = await toPng(element, {
      backgroundColor: "transparent",
      cacheBust: true,
    });
    const link = document.createElement("a");
    // Include style in filename if provided
    const styleSuffix = options?.style && options.style !== "solid" ? `-${options.style}` : "";
    link.download = `${filename}${styleSuffix}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Failed to download PNG:", error);
    throw error;
  }
}
