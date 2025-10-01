import React from "react";
import { Avatar, AvatarGroup } from "@azodik/ui";

export const AvatarPreview = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold mb-3">Avatar Sizes</h3>
      <div className="flex gap-4 items-center">
        <Avatar size="sm" initials="JD" />
        <Avatar size="md" initials="JS" />
        <Avatar size="lg" initials="BJ" />
        <Avatar size="xl" initials="XL" />
      </div>
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-3">Avatar Group</h3>
      <AvatarGroup max={3}>
        <Avatar size="md" initials="A" />
        <Avatar size="md" initials="B" />
        <Avatar size="md" initials="C" />
        <Avatar size="md" initials="D" />
        <Avatar size="md" initials="E" />
      </AvatarGroup>
    </div>
  </div>
);

export const AvatarCode = `import React from "react";
import { Avatar, AvatarGroup } from "@azodik/ui";

export const AvatarExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Avatar Sizes</h3>
        <div className="flex gap-4 items-center">
          <Avatar size="sm" initials="JD" />
          <Avatar size="md" initials="JS" />
          <Avatar size="lg" initials="BJ" />
          <Avatar size="xl" initials="XL" />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Avatar Group</h3>
        <AvatarGroup max={3}>
          <Avatar size="md" initials="A" />
          <Avatar size="md" initials="B" />
          <Avatar size="md" initials="C" />
          <Avatar size="md" initials="D" />
          <Avatar size="md" initials="E" />
        </AvatarGroup>
      </div>
    </div>
  );
};`;
