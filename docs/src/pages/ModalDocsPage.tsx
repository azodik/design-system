import { MDXProvider } from "@mdx-js/react";
import Modal from "@/docs/Modal.mdx";
import {
  Modal as ModalComponent,
  ModalFooter,
  Button,
  Card,
  CardContent,
  Box,
  Container,
} from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

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
      <Container size="4" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <Modal />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
