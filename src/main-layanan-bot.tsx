import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BotPage from "./pages/service/BotPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BotPage />
  </StrictMode>
);
