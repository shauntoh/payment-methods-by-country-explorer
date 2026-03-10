import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/payment-methods-by-country-explorer/",
  plugins: [react()]
});