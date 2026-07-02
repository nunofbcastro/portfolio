import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://nunofbcastro.github.io",
  base: "/portfolio",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  }
});