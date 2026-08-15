import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProyekPage from "./pages/proyek/ProyekPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProyekPage />
  </StrictMode>
);
