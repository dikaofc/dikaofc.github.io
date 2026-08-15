import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TestimoniPage from "./pages/testimoni/TestimoniPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TestimoniPage />
  </StrictMode>
);
