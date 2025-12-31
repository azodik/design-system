"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Flex,
  useResponsive,
} from "@azodik/ui";
import { getIconComponent } from "@/lib/icon-loader";
import { downloadSVG, downloadPNG } from "@/lib/icon-utils";
import type { IconInfo, DownloadOptions } from "@/types/icon";
import DownloadPanel from "@/components/download/DownloadPanel";
import IconPreview from "../IconPreview";
import { ArrowLeftIcon } from "@azodik/icons";

interface IconDetailProps {
  icon: IconInfo;
}

export default function IconDetail({ icon }: IconDetailProps) {
  const router = useRouter();
  const { isMobile } = useResponsive();
  const [downloadOptions, setDownloadOptions] = useState<DownloadOptions>({
    format: "svg",
    style: "solid",
    color: "default",
    size: 24,
  });

  const IconComponent = getIconComponent(icon.componentName);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!previewRef.current) return;

    try {
      const filename = icon.componentName.toLowerCase();
      if (downloadOptions.format === "svg") {
        await downloadSVG(previewRef.current, filename, downloadOptions);
      } else {
        await downloadPNG(previewRef.current, filename, downloadOptions);
      }
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again.");
    }
  };

  return (
    <Box style={{ minHeight: "100vh", background: "var(--color-background)" }}>
      <Container size="lg" style={{ padding: "clamp(1rem, 4vw, 1.5rem)" }}>
        <Button
          variant="ghost"
          onClick={() => router.back()}
          style={{
            marginBottom: "clamp(0.75rem, 3vw, 1rem)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
          }}
        >
          <Box as="span">
            {" "}
            <ArrowLeftIcon size={18} />{" "}
          </Box>
          Back to Icons
        </Button>
        <Box
          as="h1"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            lineHeight: 1.2,
          }}
        >
          {icon.displayName}
        </Box>
        <Box
          as="p"
          style={{
            color: "var(--color-text-secondary)",
            marginTop: "0.25rem",
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
          }}
        >
          {icon.componentName}
        </Box>
      </Container>

      <Container size="lg" style={{ padding: "clamp(1rem, 4vw, 2rem) clamp(1rem, 4vw, 1rem)" }}>
        <Grid columns={isMobile ? "1" : "2"} gap="4">
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <IconPreview
                ref={previewRef}
                icon={icon}
                options={downloadOptions}
                IconComponent={IconComponent}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Download</CardTitle>
            </CardHeader>
            <CardContent>
              <DownloadPanel
                icon={icon}
                options={downloadOptions}
                onOptionsChange={setDownloadOptions}
                onDownload={handleDownload}
              />
            </CardContent>
          </Card>
        </Grid>

        {icon.category && (
          <Card style={{ marginTop: "clamp(1.5rem, 4vw, 2rem)" }}>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Flex
                direction="column"
                gap="2"
                style={{ fontSize: "clamp(0.8125rem, 2vw, 0.875rem)" }}
              >
                <Box>
                  <Box as="span" style={{ fontWeight: 600 }}>
                    Category:
                  </Box>{" "}
                  {icon.category}
                </Box>
                {icon.tags && icon.tags.length > 0 && (
                  <Box>
                    <Box as="span" style={{ fontWeight: 600 }}>
                      Tags:
                    </Box>{" "}
                    {icon.tags.join(", ")}
                  </Box>
                )}
              </Flex>
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  );
}
