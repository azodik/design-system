import React, { useState } from "react";
import { Tabs, TabList, TabTrigger, TabContent, Card } from "@azodik/ui";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon, TickIcon } from "@azodik/icons";
import { useLanguageTranslation } from "@/hooks/useLanguageTranslation";

interface CodeBlockWithPreviewProps {
  children?: string;
  code?: string;
  language?: string;
  title?: string;
  preview?: React.ReactNode;
}

export const CodeBlockWithPreview: React.FC<CodeBlockWithPreviewProps> = ({
  children,
  code,
  language = "tsx",
  title,
  preview,
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const { t } = useLanguageTranslation();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code || children || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="code-block-container">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabList>
          <TabTrigger value="preview" borderWidth={4} width="100px">
            {t('preview')}
          </TabTrigger>
          <TabTrigger value="code" borderWidth={4} width="100px">
            {t('code')}
          </TabTrigger>
        </TabList>

        <TabContent value="preview">
          <Card
            className="border rounded-lg p-4 w-full flex items-center justify-center"
            style={{
              backgroundColor: "var(--preview-bg)",
              borderColor: "var(--preview-border)",
              width: "100%",
            }}
          >
            <div className="flex items-center justify-center w-full">{preview}</div>
          </Card>
        </TabContent>

        <TabContent value="code">
          <Card
            className="border rounded-lg overflow-y-auto"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
              height: "calc(100vh - 400px)",
              minHeight: "450px",
              position: "relative",
              width: "100%",
              padding:"0"
            }}
          >
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-200 flex items-center gap-2"
              style={{ top: "10px", right: "10px" }}
              title={copied ? t('copied') : t('copyCode')}
            >
              {copied ? (
                <TickIcon size={16} color="currentColor" />
              ) : (
                <CopyIcon size={16} color="currentColor" />
              )}
            </button>
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                padding: "1rem",
                background: "var(--color-background)",
                color: "var(--color-text)",
                height: "100%",
                minHeight: "100%",
                scrollbarWidth: "thin",
                scrollbarColor: "var(--color-border) transparent",
              }}
              wrapLines={true}
              wrapLongLines={true}
            >
              {code || children}
            </SyntaxHighlighter>
          </Card>
        </TabContent>
      </Tabs>
    </div>
  );
};
