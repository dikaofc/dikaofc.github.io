import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ObitoBuffPage from "./pages/proyek/ObitoBuffPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ObitoBuffPage />
  </StrictMode>
);
