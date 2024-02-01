import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ["vuetify"],
  },
  // The important bit...
  build: {
    lib: {
      // src/main.ts is where we have exported our component(s)
      entry: resolve(__dirname, "src/main.ts"),
      name: "MyComponentLibrary",
      // the name of the output files when the build is run
      fileName: "ui-library",
    },
    rollupOptions: {
      // Make sure to exclude Vue from the bundle
      external: ['vue'],
    }
  },
});