import type { Plugin } from "vite";
import { watch } from "fs";
import path from "path";

/**
 * Vite plugin to watch workspace packages and trigger HMR when they change
 * This enables hot reload when packages are rebuilt by tsup --watch
 */
export function watchWorkspacePackages(): Plugin {
  return {
    name: "watch-workspace-packages",
    configureServer(server) {
      const packagesToWatch = [
        path.resolve(__dirname, "../packages/ui/dist"),
        path.resolve(__dirname, "../packages/icons/dist"),
        path.resolve(__dirname, "../packages/core"),
      ];

      packagesToWatch.forEach((packagePath) => {
        try {
          watch(packagePath, { recursive: true }, (eventType, filename) => {
            if (filename && (eventType === "change" || eventType === "rename")) {
              // Invalidate all modules that might import from workspace packages
              const modules = Array.from(server.moduleGraph.urlToModuleMap.values());

              modules.forEach((module) => {
                if (module) {
                  // Invalidate modules that import workspace packages
                  const moduleId = module.id || module.url || "";
                  if (
                    moduleId.includes("@azodik/ui") ||
                    moduleId.includes("@azodik/icons") ||
                    moduleId.includes("azodik-ui-core")
                  ) {
                    server.moduleGraph.invalidateModule(module);
                  }
                }
              });

              // Trigger HMR reload
              server.ws.send({
                type: "full-reload",
              });
            }
          });
        } catch {
          // Package might not exist yet, that's okay - it will be created when built
          // Silently continue
        }
      });
    },
  };
}
