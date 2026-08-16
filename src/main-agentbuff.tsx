import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AgentBuffPage from "./pages/proyek/AgentBuffPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AgentBuffPage />
  </StrictMode>
);
