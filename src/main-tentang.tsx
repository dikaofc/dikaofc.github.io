import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TentangPage from "./pages/tentang/TentangPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TentangPage />
  </StrictMode>
);
