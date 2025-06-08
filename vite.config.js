import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: process.env.NODE_ENV !== "production",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === "production",
        drop_debugger: process.env.NODE_ENV === "production",
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("react") || id.includes("react-dom")) {
            return "react-vendor";
          }
          if (id.includes("react-icons") || id.includes("lucide-react")) {
            return "icons";
          }
          if (id.includes("clsx") || id.includes("tailwind-merge")) {
            return "utils";
          }
          if (id.includes("react-router")) {
            return "router";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
  },
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  preview: {
    port: 4173,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-icons",
      "lucide-react",
      "clsx",
      "tailwind-merge",
      "react-router-dom",
    ],
  },
  experimental: {
    renderBuiltUrl(filename) {
      return "/" + filename;
    },
  },
});
