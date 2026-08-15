import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PerbaikanPage from "./pages/service/PerbaikanPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PerbaikanPage />
  </StrictMode>
);
