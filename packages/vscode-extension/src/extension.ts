import * as vscode from "vscode";

/**
 * Component information for IntelliSense
 */
interface ComponentInfo {
  name: string;
  description: string;
  props: string[];
  example: string;
}

const COMPONENTS: ComponentInfo[] = [
  {
    name: "Button",
    description: "A versatile button component with multiple variants, sizes, and colors",
    props: ["variant", "size", "color", "radius", "loading", "disabled", "icon"],
    example: '<Button variant="solid" size="md" color="indigo">Click me</Button>',
  },
  {
    name: "Input",
    description: "Text input component with validation and error states",
    props: ["label", "type", "value", "onChange", "error", "help", "required", "disabled"],
    example:
      '<Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />',
  },
  {
    name: "Card",
    description: "Card component for displaying content in a contained area",
    props: ["variant", "size", "radius", "highContrast"],
    example: "<Card><CardContent>Content</CardContent></Card>",
  },
  {
    name: "Modal",
    description: "Modal dialog component with focus management and keyboard support",
    props: ["isOpen", "onClose", "title", "size", "showCloseButton"],
    example:
      '<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Title">Content</Modal>',
  },
  {
    name: "Alert",
    description: "Alert component for displaying messages and notifications",
    props: ["variant", "color", "size", "title", "icon"],
    example: '<Alert variant="soft" color="indigo" title="Info">Message</Alert>',
  },
  {
    name: "Select",
    description: "Dropdown select component with search and keyboard navigation",
    props: ["label", "options", "value", "onChange", "error", "help", "disabled"],
    example: '<Select label="Choose" options={options} value={value} onChange={setValue} />',
  },
];

/**
 * Provide hover documentation for @azodik/ui components
 */
class ComponentHoverProvider implements vscode.HoverProvider {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
  ): vscode.ProviderResult<vscode.Hover> {
    const config = vscode.workspace.getConfiguration("azodik.ui");
    if (!config.get("showHoverDocs", true)) {
      return null;
    }

    const range = document.getWordRangeAtPosition(position, /[A-Z][a-zA-Z]*/);
    if (!range) {
      return null;
    }

    const word = document.getText(range);
    const component = COMPONENTS.find((c) => c.name === word);

    if (!component) {
      return null;
    }

    const markdown = new vscode.MarkdownString();
    markdown.appendMarkdown(`### ${component.name}\n\n`);
    markdown.appendMarkdown(`${component.description}\n\n`);
    markdown.appendMarkdown("**Props:** " + component.props.join(", ") + "\n\n");
    markdown.appendMarkdown("**Example:**\n```tsx\n" + component.example + "\n```");

    return new vscode.Hover(markdown, range);
  }
}

/**
 * Provide completion items for @azodik/ui components
 */
class ComponentCompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
    _context: vscode.CompletionContext,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const config = vscode.workspace.getConfiguration("azodik.ui");
    if (!config.get("enableIntelliSense", true)) {
      return null;
    }

    const linePrefix = document.lineAt(position).text.substr(0, position.character);

    // Check if we're in an import statement
    if (!linePrefix.includes("import") && !linePrefix.includes("from")) {
      return null;
    }

    const items: vscode.CompletionItem[] = COMPONENTS.map((component) => {
      const item = new vscode.CompletionItem(component.name, vscode.CompletionItemKind.Class);
      item.detail = `@azodik/ui - ${component.description}`;
      item.documentation = new vscode.MarkdownString(component.example);
      item.insertText = component.name;
      return item;
    });

    return items;
  }
}

/**
 * Activate the extension
 */
export function activate(context: vscode.ExtensionContext) {
  console.log("Azodik UI IntelliSense extension is now active!");

  // Register hover provider
  const hoverProvider = vscode.languages.registerHoverProvider(
    [
      { scheme: "file", language: "typescript" },
      { scheme: "file", language: "typescriptreact" },
      { scheme: "file", language: "javascript" },
      { scheme: "file", language: "javascriptreact" },
    ],
    new ComponentHoverProvider(),
  );

  // Register completion provider
  const completionProvider = vscode.languages.registerCompletionItemProvider(
    [
      { scheme: "file", language: "typescript" },
      { scheme: "file", language: "typescriptreact" },
      { scheme: "file", language: "javascript" },
      { scheme: "file", language: "javascriptreact" },
    ],
    new ComponentCompletionProvider(),
    ".",
  );

  context.subscriptions.push(hoverProvider, completionProvider);

  // Show welcome message
  vscode.window.showInformationMessage("Azodik UI IntelliSense is now active!");
}

/**
 * Deactivate the extension
 */
export function deactivate() {}
