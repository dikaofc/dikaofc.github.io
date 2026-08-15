import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ToolsPage from "./pages/service/ToolsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToolsPage />
  </StrictMode>
);
