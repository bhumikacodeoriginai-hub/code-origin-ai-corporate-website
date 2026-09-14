import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Once mounted: fade the content in and remove the instant brand splash.
const splash = document.getElementById("app-splash");
requestAnimationFrame(() => {
  document.body.classList.add("app-ready");
  if (splash) {
    splash.classList.add("is-hidden");
    window.setTimeout(() => splash.remove(), 500);
  }
});
