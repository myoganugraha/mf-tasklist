import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

const configuration = {
  APP_NAME: "host",
  APP_FILE_NAME: "remoteEntry.js",
  LOGIN_REMOTE: "http://localhost:3002/assets/remoteEntry.js",
  TASKLIST_REMOTE: "http://localhost:3003/assets/remoteEntry.js",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: configuration.APP_FILE_NAME,
      filename: configuration.APP_FILE_NAME,
      remotes: {
        loginApp: configuration.LOGIN_REMOTE,
        tasklistApp: configuration.TASKLIST_REMOTE,
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
