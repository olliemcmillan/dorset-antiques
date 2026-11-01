// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Update to the production URL when the site has a home.
  site: "https://dorset-antiques.dorset-antiques.workers.dev",
  // Prefetch links on hover/tap for instant-feeling navigation.
  prefetch: true,
});
