import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DikaRoutePage from "./pages/proyek/DikaRoutePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DikaRoutePage />
  </StrictMode>
);
