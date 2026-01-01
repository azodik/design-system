import { MDXProvider } from "@mdx-js/react";
import OTPInput from "@/docs/OTPInput.mdx";
import { OTPInput as OTPInputComponent, Card, CardContent, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  OTPInput: OTPInputComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function OTPInputDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "OTPInput", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <OTPInput />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}

