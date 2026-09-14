import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Remove the instant brand splash once the app has mounted and painted.
const splash = document.getElementById("app-splash");
if (splash) {
  requestAnimationFrame(() => {
    splash.classList.add("is-hidden");
    window.setTimeout(() => splash.remove(), 500);
  });
}
