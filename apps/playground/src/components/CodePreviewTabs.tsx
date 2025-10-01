import React, { useState } from "react";
import { Tabs, TabList, TabTrigger, TabContent, Card } from "@azodik/ui";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyIcon, TickIcon } from "../icons";

interface CodePreviewTabsProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  activeTab: string;
  onTabChange: (value: string) => void;
}

export default function CodePreviewTabs({
  title,
  description,
  preview,
  code,
  activeTab,
  onTabChange,
}: CodePreviewTabsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };
  return (
    <section className="mb-lg">
      <h2 style={{ marginBottom: '0px' }}>{title}</h2>
      <p className="text-gray-600 text-md" style={{ marginTop: '2px', marginBottom: '8px' }}>{description}</p>
      
      <Tabs value={activeTab} onValueChange={onTabChange} style={{ marginTop: '40px' }}>
        <TabList>
          <TabTrigger value="preview">Preview</TabTrigger>
          <TabTrigger value="code">Code</TabTrigger>
        </TabList>
        
        <TabContent value="preview">
          <Card 
            className="border border-gray-200 rounded-lg p-6 overflow-y-auto flex items-center justify-center"
            style={{ 
              backgroundColor: 'white', 
              height: 'calc(100vh - 400px)',
              minHeight: '450px'
            }}
          >
            {preview}
          </Card>
        </TabContent>
        
        <TabContent value="code">
          <Card 
            className="border border-gray-200 rounded-lg p-4 overflow-y-auto"
            style={{ 
              backgroundColor: '#f9fafb', 
              height: 'calc(100vh - 400px)',
              minHeight: '450px',
              position: 'relative'
            }}
          >
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-200 flex items-center gap-2"
              style={{ top: '30px', right: '35px' }}
              title={copied ? "Copied!" : "Copy code"}
            >
              {copied ? (
                <TickIcon size={16} color="currentColor" />
              ) : (
                <CopyIcon size={16} color="currentColor" />
              )}
            </button>
            <SyntaxHighlighter
              language="jsx"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                lineHeight: '1.5',
                padding: '1rem',
                background: '#1e1e1e',
                color: '#d4d4d4',
                height: '100%',
                minHeight: '100%',
                scrollbarWidth: 'thin',
                scrollbarColor: '#94a3b8 transparent'
              }}
              wrapLines={true}
              wrapLongLines={true}
            >
              {code}
            </SyntaxHighlighter>
          </Card>
        </TabContent>
      </Tabs>
    </section>
  );
}
