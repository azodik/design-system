import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  transpilePackages: ['@azodik/icons', '@azodik/ui', 'azodik-ui-core'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// Initialize OpenNext Cloudflare for development
initOpenNextCloudflareForDev();

