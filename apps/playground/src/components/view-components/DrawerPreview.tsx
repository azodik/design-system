import React from "react";
import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription, 
  DrawerBody, 
  DrawerFooter,
  DrawerClose,
  Button,
  Input,
} from "@azodik/ui";

export const DrawerPreview = () => (
  <div className="space-y-4">
    {/* Basic Drawer */}
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div style={{ padding: '0 25%' }}>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </DrawerDescription>
          </DrawerHeader>
            <DrawerBody>
              <div className="space-y-4">
                  <Input
                    label="Name"
                    type="text"
                    defaultValue="John Doe"
                    placeholder="Enter your name"
                  />
              </div>
            </DrawerBody>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
            <Button>Submit</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
);

export const DrawerCode = `import React from "react";
import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription, 
  DrawerBody, 
  DrawerFooter,
  DrawerClose,
  Button,
  Input
} from "@azodik/ui";

export const DrawerExample = () => {
  return (
    <div className="space-y-4">
      {/* Basic Drawer */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <div className="space-y-4">
                <Input
                  label="Name"
                  type="text"
                  defaultValue="John Doe"
                  placeholder="Enter your name"
                />
            </div>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
            <Button>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};`;
