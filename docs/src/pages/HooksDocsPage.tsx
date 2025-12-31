import { MDXProvider } from "@mdx-js/react";
import Hooks from "@/docs/Hooks.mdx";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import { Box, Container } from "@azodik/ui";
import "@/styles/docs.css";

export default function HooksDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Hooks", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="4" className="p-2">
        <Box className="docs-content">
          <Box style={{ paddingBottom: "4rem" }}>
            <MDXProvider>
              <Hooks />
            </MDXProvider>
          </Box>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
