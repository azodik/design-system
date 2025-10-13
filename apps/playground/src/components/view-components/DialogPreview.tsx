import React from "react";
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogBody, 
  DialogFooter,
  DialogClose,
  Button,
  Input,
} from "@azodik/ui";

export const DialogPreview = () => (
  <div className="flex-vertical">
    {/* Edit Profile Dialog */}
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <div className="flex-vertical">
            <div>
              <Input
                label="Name"
                type="text"
                defaultValue="Pedro Duarte"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <Input
                label="Username"
                type="text"
                defaultValue="@peduarte"
                placeholder="Enter your username"
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </DialogFooter>
        <DialogClose />
      </DialogContent>
    </Dialog>
  </div>
);

export const DialogCode = `import React from "react";
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogBody, 
  DialogFooter, 
  DialogClose,
  Button,
  Input
} from "@azodik/ui";

export const DialogExample = () => {
  return (
    <div className="flex-vertical">
      {/* Edit Profile Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <div className="flex-vertical">
              <div>
                <Input
                  label="Name"
                  type="text"
                  defaultValue="Pedro Duarte"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <Input
                  label="Username"
                  type="text"
                  defaultValue="@peduarte"
                  placeholder="Enter your username"
                />
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};`;
