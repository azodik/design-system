declare module "react-syntax-highlighter" {
  import { ComponentType } from "react";

  type StyleObject = Record<string, React.CSSProperties>;

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: StyleObject;
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
  type StyleObject = Record<string, React.CSSProperties>;

  export const vscDarkPlus: StyleObject;
  export const vs: StyleObject;
  export const vscDark: StyleObject;
  export const atomDark: StyleObject;
  export const tomorrow: StyleObject;
  export const prism: StyleObject;
}
