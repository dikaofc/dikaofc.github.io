import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LayananPage from "./pages/layanan/LayananPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LayananPage />
  </StrictMode>
);
