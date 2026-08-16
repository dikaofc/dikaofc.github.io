import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RemoteUniversalPage from "./pages/proyek/RemoteUniversalPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RemoteUniversalPage />
  </StrictMode>
);
