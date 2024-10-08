import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

const configuration = {
  APP_NAME: "tasklist",
  APP_FILE_NAME: "remoteEntry.js",
  PORT: 3003,
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: configuration.PORT,
  },
  plugins: [
    react(),
    federation({
      name: configuration.APP_FILE_NAME,
      filename: configuration.APP_FILE_NAME,
      exposes: {
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
