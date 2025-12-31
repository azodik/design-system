"use client";
import React, { useRef, useEffect } from "react";

export interface RichTextEditorProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  /**
   * Editor content (HTML)
   */
  value?: string;
  /**
   * Callback when content changes
   */
  onChange?: (html: string) => void;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Editor height
   */
  height?: number | string;
  /**
   * Show toolbar
   */
  showToolbar?: boolean;
  /**
   * Toolbar buttons
   */
  toolbar?: Array<"bold" | "italic" | "underline" | "strikethrough" | "link" | "list" | "heading">;
  /**
   * Read-only mode
   */
  readOnly?: boolean;
}

/**
 * Rich Text Editor component - WYSIWYG editor
 *
 * @example
 * ```tsx
 * <RichTextEditor
 *   value={content}
 *   onChange={setContent}
 *   placeholder="Start typing..."
 * />
 * ```
 */
export function RichTextEditor({
  value = "",
  onChange,
  placeholder = "Start typing...",
  height = 200,
  showToolbar = true,
  toolbar = ["bold", "italic", "underline", "link", "list"],
  readOnly = false,
  className = "",
  ...props
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current && onChange) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  const handleToolbarClick = (action: string) => {
    switch (action) {
      case "bold":
        execCommand("bold");
        break;
      case "italic":
        execCommand("italic");
        break;
      case "underline":
        execCommand("underline");
        break;
      case "strikethrough":
        execCommand("strikeThrough");
        break;
      case "link": {
        const url = prompt("Enter URL:");
        if (url) execCommand("createLink", url);
        break;
      }
      case "list":
        execCommand("insertUnorderedList");
        break;
      case "heading":
        execCommand("formatBlock", "<h2>");
        break;
    }
  };

  const editorClasses = ["rich-text-editor", className].filter(Boolean).join(" ");

  return (
    <div className={editorClasses} {...props}>
      {showToolbar && !readOnly && (
        <div className="rich-text-editor-toolbar">
          {toolbar.map((button) => (
            <button
              key={button}
              type="button"
              className="rich-text-editor-toolbar-button"
              onClick={() => handleToolbarClick(button)}
              title={button.charAt(0).toUpperCase() + button.slice(1)}
            >
              {button === "bold" && "B"}
              {button === "italic" && "I"}
              {button === "underline" && "U"}
              {button === "strikethrough" && "S"}
              {button === "link" && "🔗"}
              {button === "list" && "•"}
              {button === "heading" && "H"}
            </button>
          ))}
        </div>
      )}
      <div
        ref={editorRef}
        className="rich-text-editor-content"
        contentEditable={!readOnly}
        onInput={handleInput}
        style={{ height: typeof height === "number" ? `${height}px` : height }}
        data-placeholder={placeholder}
        suppressContentEditableWarning
      />
    </div>
  );
}

export default RichTextEditor;
