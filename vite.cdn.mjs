import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve("src/svg-mask-icon.js"),
      name: "SvgMaskIcon",
      fileName: () => "svg-mask-icon.js",
      formats: ["es"],
    },
    outDir: "dist-cdn",
    emptyOutDir: true,
  },
});
