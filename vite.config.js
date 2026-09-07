import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Keep this value equal to the GitHub repository name.
export default defineConfig({
  base: "/z-deco/",
  plugins: [react()],
});
