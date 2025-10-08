import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@azodik/ui";

export const AccordionPreview = () => (
  <div>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is this component?</AccordionTrigger>
        <AccordionContent>
          This is an accordion component that allows you to show and hide content sections. 
          It's perfect for FAQs, documentation, or any collapsible content. The component 
          provides a clean and professional interface for organizing information.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I use it?</AccordionTrigger>
        <AccordionContent>
          Simply wrap your content in AccordionItem components and place them inside an Accordion. 
          Each item will have a clickable header that toggles the content visibility. You can 
          control whether multiple items can be open simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I customize it?</AccordionTrigger>
        <AccordionContent>
          Yes! You can customize the appearance, add custom icons, disable items, and control 
          whether multiple items can be open at once. The component supports both controlled 
          and uncontrolled state management.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export const AccordionCode = `import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@azodik/ui";

export const AccordionExample = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this component?</AccordionTrigger>
          <AccordionContent>
            This is an accordion component that allows you to show and hide content sections. 
            It's perfect for FAQs, documentation, or any collapsible content.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I use it?</AccordionTrigger>
          <AccordionContent>
            Simply wrap your content in AccordionItem components and place them inside an Accordion. 
            Each item will have a clickable header that toggles the content visibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customize it?</AccordionTrigger>
          <AccordionContent>
            Yes! You can customize the appearance, add custom icons, disable items, and control 
            whether multiple items can be open at once.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};`;
