import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  // Transpile workspace packages (these will be bundled, so no need for serverExternalPackages)
  transpilePackages: ['@azodik/icons', '@azodik/ui', 'azodik-ui-core'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// Initialize OpenNext Cloudflare for development
initOpenNextCloudflareForDev();

