import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Modal from "../docs/Modal.mdx";
import { Modal as ModalComponent, ModalFooter, Button, Card, CardContent } from "@azodik/ui";
import { ComponentNavigation } from "../components/docs";
import SidebarLayout from "../components/sidebar/Sidebar";
import "../styles/docs.css";

const components = {
  Modal: ModalComponent,
  ModalFooter: ModalFooter,
  Button: Button,
  Card: Card,
  CardContent: CardContent,
};

export default function ModalDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Modal", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Modal />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
