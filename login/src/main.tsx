import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LoginPage from "./LoginPage.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <LoginPage />
    </Provider>
  </StrictMode>
);
