import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Switch from '../docs/Switch.mdx';
import { Switch as SwitchComponent, Card, CardContent } from '@azodik/ui';
import SidebarLayout from '../components/sidebar/Sidebar';
import '../styles/docs.css';

const components = {
  Switch: SwitchComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function SwitchDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Switch", current: true }
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Switch />
          </MDXProvider>
        </div>
      </div>
    </SidebarLayout>
  );
}
