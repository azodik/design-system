import React from "react";
import { Button, Tooltip, Card } from "@azodik/ui";

export const TooltipPreview = () => {
  return (
    <div className="flex-vertical-lg">
      <Card className="p-6">
        <div className="flex-vertical">
          <div className="flex gap-md flex-wrap tooltip-buttons">
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
    <div className="flex-vertical-lg">
      <Card className="p-6">
        <div className="flex-vertical">
          <div className="flex gap-md flex-wrap tooltip-buttons">
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
