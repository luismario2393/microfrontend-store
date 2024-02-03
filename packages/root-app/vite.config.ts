import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "root-app",
      filename: "root-app.js",
      shared: ["react", "react-dom", "react-router-dom", "zustand"],
      remotes: {
        "products-mfe": "http://localhost:3001/assets/products-mfe.js",
        "about-mfe": "http://localhost:3002/assets/about-mfe.js",
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
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
