import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Optional: Add R2 incremental cache if needed
  // incrementalCache: r2IncrementalCache,
});
