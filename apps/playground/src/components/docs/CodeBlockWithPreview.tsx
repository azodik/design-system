import React, { useState } from 'react';
import { Tabs, TabList, TabTrigger, TabContent, Card } from '@azodik/ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyIcon, TickIcon } from '../../icons';

interface CodeBlockWithPreviewProps {
  children: string;
  language?: string;
  title?: string;
  preview?: React.ReactNode;
}

export const CodeBlockWithPreview: React.FC<CodeBlockWithPreviewProps> = ({ 
  children, 
  language = 'tsx',
  title,
  preview
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabList>
        <TabTrigger value="preview" borderWidth={4} width="100px">Preview</TabTrigger>
        <TabTrigger value="code" borderWidth={4} width="100px">Code</TabTrigger>
      </TabList>
      
      <TabContent value="preview">
        <Card 
          className="border border-gray-200 rounded-lg p-4 w-full flex items-center justify-center"
          style={{ 
            backgroundColor: 'white',
          }}
        >
          <div className="flex items-center justify-center w-full">
            {preview}
          </div>
        </Card>
      </TabContent>
      
      <TabContent value="code">
        <Card 
          className="border border-gray-200 rounded-lg overflow-y-auto"
          style={{ 
            backgroundColor: '#f9fafb', 
            position: 'relative'
          }}
        >
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-200 flex items-center gap-2"
            style={{ top: '10px', right: '10px' }}
            title={copied ? "Copied!" : "Copy code"}
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
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              padding: '1rem',
              background: '#1e1e1e',
              color: '#d4d4d4',
              height: '100%',
              minHeight: '100%',
              scrollbarWidth: 'thin',
              scrollbarColor: '#d1d5db transparent'
            }}
            wrapLines={true}
            wrapLongLines={true}
          >
            {children}
          </SyntaxHighlighter>
        </Card>
      </TabContent>
    </Tabs>
  );
};
