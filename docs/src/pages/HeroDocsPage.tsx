import { MDXProvider } from "@mdx-js/react";
import Hero from "@/docs/Hero.mdx";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import { Box, Container } from "@azodik/ui";
import "@/styles/docs.css";

export default function HeroDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Hero", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <Box style={{ paddingBottom: "4rem" }}>
            <MDXProvider>
              <Hero />
            </MDXProvider>
          </Box>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
