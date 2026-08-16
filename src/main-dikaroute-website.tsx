import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DikaRouteWebsitePage from "./pages/proyek/DikaRouteWebsitePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DikaRouteWebsitePage />
  </StrictMode>
);
