import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WebsitePage from "./pages/proyek/WebsitePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebsitePage />
  </StrictMode>
);
