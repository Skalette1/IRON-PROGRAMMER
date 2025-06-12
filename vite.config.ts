import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/IRON-PROGRAMMER/",
  build: {
    outDir: "dist", 
  },
  server: {
    port: 3000,
  },
});