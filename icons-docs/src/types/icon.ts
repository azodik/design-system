export interface IconInfo {
  name: string;
  displayName: string;
  componentName: string;
  category?: string;
  tags?: string[];
}

export interface IconMetadata {
  viewBox: string;
  paths: string[];
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export type IconFormat = "svg" | "png";
export type IconStyle = "solid" | "outline" | "duotone";
export type IconColor = "default" | "primary" | "secondary" | "accent" | "custom";

export interface DownloadOptions {
  format: IconFormat;
  style: IconStyle;
  color: IconColor;
  customColor?: string;
  size: number;
}
