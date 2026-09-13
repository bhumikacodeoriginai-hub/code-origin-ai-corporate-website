import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright E2E configuration for the Code Origin.AI website.
 *
 * Run locally:
 *   npm install
 *   npx playwright install
 *   npm run test:e2e
 *
 * The webServer block builds the app and serves the PRODUCTION build via
 * `vite preview` (port 4173), so tests run against the real production output
 * — not the dev server.
 */
export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [["html", { open: "never" }], ["list"]],

  use: {
    baseURL: process.env.BASE_URL || "http://localhost:4173",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  // Build + serve the production bundle before the tests run.
  webServer: {
    command: "npm run build && npm run preview -- --port 4173",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },

  // Cross-browser + cross-device coverage (Chromium, Firefox, WebKit, mobile).
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
    { name: "Mobile Chrome", use: { ...devices["Pixel 5"] } },
    { name: "Mobile Safari", use: { ...devices["iPhone 13"] } },
    { name: "Tablet", use: { ...devices["iPad (gen 7)"] } },
  ],
});
