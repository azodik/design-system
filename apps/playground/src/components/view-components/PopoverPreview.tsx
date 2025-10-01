import React, { useState } from "react";
import { Button, Popover, Card } from "@azodik/ui";

export const PopoverPreview = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <Card 
        className="p-6"
        style={{ 
          width: '100%',
          minWidth: '280px',
          maxWidth: '500px'
        }}
      >
        <div className="space-y-4">
          <div 
            className="flex gap-2 flex-wrap"
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Popover
              isOpen={isPopoverOpen}
              onClose={() => setIsPopoverOpen(false)}
              content="This is popover content with some information."
              title="Popover Title"
            >
              <Button 
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                style={{ fontSize: '0.875rem', padding: '0.5rem 0.75rem' }}
              >
                Toggle Popover
              </Button>
            </Popover>

            
          </div>
        </div>
      </Card>
    </div>
  );
};

export const PopoverCode = `import React, { useState } from "react";
import { Button, Popover, Card } from "@azodik/ui";

export const PopoverExample = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <Card 
        className="p-6"
        style={{ 
          width: '100%',
          minWidth: '280px',
          maxWidth: '500px'
        }}
      >
        <div className="space-y-4">
          <div 
            className="flex gap-2 flex-wrap"
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Popover
              isOpen={isPopoverOpen}
              onClose={() => setIsPopoverOpen(false)}
              content="This is popover content with some information."
              title="Popover Title"
            >
              <Button 
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                style={{ fontSize: '0.875rem', padding: '0.5rem 0.75rem' }}
              >
                Toggle Popover
              </Button>
            </Popover>
          </div>
        </div>
      </Card>
    </div>
  );
};`;