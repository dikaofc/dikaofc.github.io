import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FaqPage from "./pages/faq/FaqPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FaqPage />
  </StrictMode>
);
