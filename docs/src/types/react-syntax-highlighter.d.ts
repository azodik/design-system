declare module "react-syntax-highlighter" {
  import { ComponentType } from "react";

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    customStyle?: React.CSSProperties;
    wrapLines?: boolean;
    wrapLongLines?: boolean;
    children?: string;
  }

  export const Prism: ComponentType<SyntaxHighlighterProps>;
  export const Light: ComponentType<SyntaxHighlighterProps>;
  export const Dark: ComponentType<SyntaxHighlighterProps>;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const vscDarkPlus: any;
  export const vs: any;
  export const vscDark: any;
  export const atomDark: any;
  export const tomorrow: any;
  export const prism: any;
}
