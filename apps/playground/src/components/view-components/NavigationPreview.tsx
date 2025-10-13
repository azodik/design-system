import React from "react";
import { Navigation, NavItem } from "@azodik/ui";

export const NavigationPreview = () => (
  <div className="flex-vertical"
  style={{
    width: '100%',
    minWidth: '400px',
    maxWidth: '800px'
  }}
  >
    <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
      <Navigation brand="Azodik">
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Services</NavItem>
        <NavItem href="#">Contact</NavItem>
      </Navigation>
    </div>
  </div>
);

export const NavigationCode = `import React from "react";
import { Navigation, NavItem } from "@azodik/ui";

export const NavigationExample = () => {
  return (
    <div className="flex-vertical">
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
        <Navigation brand="Azodik">
          <NavItem href="#" active>Home</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Services</NavItem>
          <NavItem href="#">Contact</NavItem>
        </Navigation>
      </div>
    </div>
  );
};`;
