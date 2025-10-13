import React from "react";
import GettingStarted from "../components/GettingStarted";
import { ComponentNavigation } from "../components/docs";
import SidebarLayout from "../components/sidebar/Sidebar";
import "../styles/docs.css";

export default function GettingStartedPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Getting Started", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <GettingStarted />
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
