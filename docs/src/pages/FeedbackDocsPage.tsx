
import { MDXProvider } from "@mdx-js/react";
import FeedbackDocs from "../docs/Feedback.mdx";
import { Spinner, Skeleton, Progress, Flex, Card, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Spinner,
  Skeleton,
  Progress,
  Flex,
  Card,
};

export default function FeedbackDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Feedback", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="4" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <FeedbackDocs />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
