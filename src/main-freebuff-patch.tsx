import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FreebuffPatchPage from "./pages/proyek/FreebuffPatchPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FreebuffPatchPage />
  </StrictMode>
);
