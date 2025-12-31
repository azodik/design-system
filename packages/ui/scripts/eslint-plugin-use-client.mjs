/**
 * ESLint plugin to enforce "use client" directive in component files
 * This is a custom rule to ensure all client components have the directive
 */

export default {
  meta: {
    type: "problem",
    docs: {
      description: "Require 'use client' directive in files using React hooks or browser APIs",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    const sourceCode = context.getSourceCode();
    const filename = context.getFilename();

    // Only check component files
    if (!filename.endsWith(".tsx") && !filename.endsWith(".ts")) {
      return {};
    }

    // Skip test files and config files
    if (
      filename.includes(".test.") ||
      filename.includes(".spec.") ||
      filename.includes(".stories.") ||
      filename.includes("test-utils") ||
      filename.includes("a11y-test-utils") ||
      filename.includes("config") ||
      filename.includes("server.ts") ||
      filename.includes("ThemeScript.tsx") // Server component
    ) {
      return {};
    }

    return {
      Program(node) {
        const text = sourceCode.getText();
        const firstStatement = node.body[0];

        // Check if file uses React hooks or browser APIs
        const hasHooks = /useState|useEffect|useContext|useRef|useCallback|useMemo|useReducer|useLayoutEffect/.test(
          text,
        );
        const hasBrowserAPI =
          /window\.|document\.|localStorage|sessionStorage|navigator\./.test(text);
        const hasEventListeners = /addEventListener|removeEventListener/.test(text);

        const needsDirective = hasHooks || hasBrowserAPI || hasEventListeners;

        if (!needsDirective) {
          return;
        }

        // Check if directive already exists
        const hasDirective =
          text.startsWith('"use client";') ||
          text.startsWith("'use client';") ||
          (firstStatement &&
            sourceCode.getText(firstStatement).trim() === '"use client";');

        if (!hasDirective) {
          context.report({
            node: firstStatement || node,
            message:
              "Files using React hooks or browser APIs must include 'use client' directive at the top",
            fix(fixer) {
              if (firstStatement) {
                return fixer.insertTextBefore(firstStatement, '"use client";\n');
              }
              return fixer.insertTextBeforeRange([0, 0], '"use client";\n');
            },
          });
        }
      },
    };
  },
};

