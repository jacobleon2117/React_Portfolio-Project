import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
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
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          icons: ["react-icons", "lucide-react"],
          utils: ["clsx", "tailwind-merge"],
        },
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // 4kb - files smaller than this will be inlined as base64
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
    ],
  },
  experimental: {
    renderBuiltUrl(filename) {
      return "/" + filename;
    },
  },
});
