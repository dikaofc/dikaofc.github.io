import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TelegramBotAiPage from "./pages/proyek/TelegramBotAiPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TelegramBotAiPage />
  </StrictMode>
);
