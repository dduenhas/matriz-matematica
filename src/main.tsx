import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { applyA11y, loadA11y } from "./game/a11y";
import "./styles.css";

applyA11y(loadA11y());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
