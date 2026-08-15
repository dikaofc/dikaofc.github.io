import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HargaPage from "./pages/harga/HargaPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HargaPage />
  </StrictMode>
);
