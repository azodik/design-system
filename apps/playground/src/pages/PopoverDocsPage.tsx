import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Popover from "../docs/Popover.mdx";
import { Popover as PopoverComponent, Button, Card, CardContent } from "@azodik/ui";
import { ComponentNavigation } from "../components/docs";
import SidebarLayout from "../components/sidebar/Sidebar";
import "../styles/docs.css";

const components = {
  Popover: PopoverComponent,
  Button: Button,
  Card: Card,
  CardContent: CardContent,
};

export default function PopoverDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Popover", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Popover />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
