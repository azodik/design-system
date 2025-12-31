import { MDXProvider } from "@mdx-js/react";
import AccordionDocs from "../docs/Accordion.mdx";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Box,
  Container,
} from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};

export default function AccordionDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Accordion", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <AccordionDocs />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
