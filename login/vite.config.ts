import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

const configuration = {
  APP_NAME: "login",
  APP_FILE_NAME: "remoteEntry.js",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: configuration.APP_FILE_NAME,
      filename: configuration.APP_FILE_NAME,
      exposes: {
        "./LoginPage": "./src/LoginPage.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
