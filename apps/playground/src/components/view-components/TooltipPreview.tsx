import React from "react";
import { Button, Tooltip, Card } from "@azodik/ui";

export const TooltipPreview = () => {
  return (
    <div className="space-y-6">
      <Card 
        className="p-6"
        style={{ 
          width: '100%',
          minWidth: '280px',
          maxWidth: '700px'
        }}
      >
        <div className="space-y-4">
          <div className="flex gap-4 flex-wrap tooltip-buttons">
            <Tooltip content="This is a helpful tooltip">
              <Button>Hover for tooltip</Button>
            </Tooltip>
            
            <Tooltip content="Click to perform an action">
              <Button variant="secondary">Secondary Button</Button>
            </Tooltip>
            
            <Tooltip content="This is a longer tooltip message that provides more detailed information">
              <Button variant="tertiary">Tertiary Button</Button>
            </Tooltip>
          </div>
        </div>
      </Card>
    </div>
  );
};

export const TooltipCode = `import React from "react";
import { Button, Tooltip, Card } from "@azodik/ui";

export const TooltipExample = () => {
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
          <div className="flex gap-4 flex-wrap tooltip-buttons">
            <Tooltip content="This is a helpful tooltip">
              <Button>Hover for tooltip</Button>
            </Tooltip>
            
            <Tooltip content="Click to perform an action">
              <Button variant="secondary">Secondary Button</Button>
            </Tooltip>
            
            <Tooltip content="This is a longer tooltip message that provides more detailed information">
              <Button variant="tertiary">Tertiary Button</Button>
            </Tooltip>
          </div>
        </div>
      </Card>
    </div>
  );
};`;
