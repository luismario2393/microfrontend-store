import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "about-mfe",
      filename: "about-mfe.js",
      shared: ["react", "react-dom", "react-router-dom", "zustand"],
      exposes: {
        "./App": "./src/App.tsx",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
});
