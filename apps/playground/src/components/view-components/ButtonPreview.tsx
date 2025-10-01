import React from "react";
import { Button } from "@azodik/ui";

export const ButtonPreview = () => (
  <div className="space-y-6">
    {/* Button Variants */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Button Variants</h3>
      <div className="flex gap-3">
        <Button variant="primary" onClick={() => alert("Primary clicked!")}>
          Primary Button
        </Button>
        <Button variant="secondary">
          Secondary Button
        </Button>
        <Button variant="tertiary">
          Tertiary Button
        </Button>
      </div>
    </div>

    {/* Button Sizes */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium text-gray-700">Primary</h4>
          <div className="flex flex-col gap-2">
            <Button size="sm" variant="primary">Small Button</Button>
            <Button size="md" variant="primary">Medium Button</Button>
            <Button size="lg" variant="primary">Large Button</Button>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium text-gray-700">Secondary</h4>
          <div className="flex flex-col gap-2">
            <Button size="sm" variant="secondary">Small Secondary</Button>
            <Button size="md" variant="secondary">Medium Secondary</Button>
            <Button size="lg" variant="secondary">Large Secondary</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ButtonCode = `import React from "react";
import { Button } from "@azodik/ui";

export const ButtonExample = () => {
  return (
    <div className="space-y-6">
      {/* Button Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Button Variants</h3>
        <div className="flex gap-3">
          <Button variant="primary" onClick={() => alert("Primary clicked!")}>
            Primary Button
          </Button>
          <Button variant="secondary">
            Secondary Button
          </Button>
          <Button variant="tertiary">
            Tertiary Button
          </Button>
        </div>
      </div>

      {/* Button Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-medium text-gray-700">Primary</h4>
            <div className="flex flex-col gap-2">
              <Button size="sm" variant="primary">Small Button</Button>
              <Button size="md" variant="primary">Medium Button</Button>
              <Button size="lg" variant="primary">Large Button</Button>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-medium text-gray-700">Secondary</h4>
            <div className="flex flex-col gap-2">
              <Button size="sm" variant="secondary">Small Secondary</Button>
              <Button size="md" variant="secondary">Medium Secondary</Button>
              <Button size="lg" variant="secondary">Large Secondary</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};`;
