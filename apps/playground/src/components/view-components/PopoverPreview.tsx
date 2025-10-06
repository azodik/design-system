import React, { useState } from "react";
import { Button, Popover, Card, Select } from "@azodik/ui";

// Export the state and functions for use in ComponentRenderer
export const usePopoverState = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("bottom");
  const [selectedOffset, setSelectedOffset] = useState(8);
  
  return {
    isPopoverOpen,
    setIsPopoverOpen,
    selectedPosition,
    setSelectedPosition,
    selectedOffset,
    setSelectedOffset
  };
};

export const PopoverPreview = () => {
  const {
    isPopoverOpen,
    setIsPopoverOpen,
    selectedPosition,
    setSelectedPosition,
    selectedOffset,
    setSelectedOffset
  } = usePopoverState();

  const positionOptions = [
    { value: "top", label: "Top" },
    { value: "top-start", label: "Top Start" },
    { value: "top-end", label: "Top End" },
    { value: "bottom", label: "Bottom" },
    { value: "bottom-start", label: "Bottom Start" },
    { value: "bottom-end", label: "Bottom End" },
    { value: "left", label: "Left" },
    { value: "left-start", label: "Left Start" },
    { value: "left-end", label: "Left End" },
    { value: "right", label: "Right" },
    { value: "right-start", label: "Right Start" },
    { value: "right-end", label: "Right End" }
  ];

  const offsetOptions = [
    { value: "4", label: "4px" },
    { value: "8", label: "8px" },
    { value: "12", label: "12px" },
    { value: "16", label: "16px" },
    { value: "20", label: "20px" },
    { value: "24", label: "24px" }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-4" width="100%" height="400px">
        <div className="space-y-6">
          {/* Controls */}
          <div className="flex gap-4 flex-wrap justify-center items-center" style={{ gap: 'var(--space-lg)' }}>
            <div className="flex flex-col gap-2">
              <Select
                label="Position:"
                value={selectedPosition}
                onChange={setSelectedPosition}
                options={positionOptions}
                className="min-w-[100px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Select
                label="Offset:"
                value={selectedOffset.toString()}
                onChange={(value) => setSelectedOffset(Number(value))}
                options={offsetOptions}
                className="min-w-[100px]"
              />
            </div>
          </div>

          {/* Popover Demo */}
          <div 
            className="flex gap-4 flex-wrap justify-center items-center"
            style={{ minHeight: '250px' }}
          >
            <Popover
              isOpen={isPopoverOpen}
              onClose={() => setIsPopoverOpen(false)}
              content={`This popover is positioned at ${selectedPosition} with ${selectedOffset}px offset.`}
              title={`${selectedPosition.charAt(0).toUpperCase() + selectedPosition.slice(1)} Popover`}
              position={selectedPosition as any}
              offset={selectedOffset}
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

// Custom Popover component with shared state for ComponentRenderer
export const PopoverWithSharedState = ({ 
  isPopoverOpen, 
  setIsPopoverOpen, 
  selectedPosition, 
  setSelectedPosition, 
  selectedOffset, 
  setSelectedOffset 
}: any) => {
  const positionOptions = [
    { value: "top", label: "Top" },
    { value: "top-start", label: "Top Start" },
    { value: "top-end", label: "Top End" },
    { value: "bottom", label: "Bottom" },
    { value: "bottom-start", label: "Bottom Start" },
    { value: "bottom-end", label: "Bottom End" },
    { value: "left", label: "Left" },
    { value: "left-start", label: "Left Start" },
    { value: "left-end", label: "Left End" },
    { value: "right", label: "Right" },
    { value: "right-start", label: "Right Start" },
    { value: "right-end", label: "Right End" }
  ];

  const offsetOptions = [
    { value: "4", label: "4px" },
    { value: "8", label: "8px" },
    { value: "12", label: "12px" },
    { value: "16", label: "16px" },
    { value: "20", label: "20px" },
    { value: "24", label: "24px" }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-4" width="100%" height="400px">
        <div className="space-y-6">
          {/* Controls */}
          <div className="flex gap-4 flex-wrap justify-center items-center" style={{ gap: 'var(--space-lg)' }}>
            <div className="flex flex-col gap-2">
              <Select
                label="Position:"
                value={selectedPosition}
                onChange={setSelectedPosition}
                options={positionOptions}
                className="min-w-[100px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Select
                label="Offset:"
                value={selectedOffset.toString()}
                onChange={(value) => setSelectedOffset(Number(value))}
                options={offsetOptions}
                className="min-w-[100px]"
              />
            </div>
          </div>

          {/* Popover Demo */}
          <div 
            className="flex gap-4 flex-wrap justify-center items-center"
            style={{ minHeight: '250px' }}
          >
            <Popover
              isOpen={isPopoverOpen}
              onClose={() => setIsPopoverOpen(false)}
              content={`This popover is positioned at ${selectedPosition} with ${selectedOffset}px offset.`}
              title={`${selectedPosition.charAt(0).toUpperCase() + selectedPosition.slice(1)} Popover`}
              position={selectedPosition as any}
              offset={selectedOffset}
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

export const getPopoverCode = (position: string, offset: number) => `import React, { useState } from "react";
import { Button, Popover, Card } from "@azodik/ui";

export const PopoverExample = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className="space-y-6">
      <Card className="p-4" width="100%" height="300px">
        <div className="flex justify-center items-center" style={{ minHeight: '200px' }}>
          <Popover
            isOpen={isPopoverOpen}
            onClose={() => setIsPopoverOpen(false)}
            content="This is a simple popover with custom position and offset."
            title="Popover Title"
            position="${position}"
            offset={${offset}}
          >
            <Button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
              Toggle Popover
            </Button>
          </Popover>
        </div>
      </Card>
    </div>
  );
};`;