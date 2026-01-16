import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Design } from "./screens/Design";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Design />
  </StrictMode>,
);
