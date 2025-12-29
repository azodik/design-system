import { MDXProvider } from "@mdx-js/react";
import Theming from "@/docs/Theming.mdx";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import { Box, Container } from "@azodik/ui";
import "@/styles/docs.css";

export default function ThemingDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Theming", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="4" className="p-2">
        <Box className="docs-content">
          <Box style={{ paddingBottom: "4rem" }}>
            <MDXProvider>
              <Theming />
            </MDXProvider>
          </Box>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
