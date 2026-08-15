import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import KontakPage from "./pages/kontak/KontakPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KontakPage />
  </StrictMode>
);
