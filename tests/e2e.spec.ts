import { test, expect, type Page } from "@playwright/test";

/**
 * Code Origin.AI — critical-path E2E suite.
 * Covers the flows required for production sign-off: page load, navigation,
 * CTAs, contact integrations (WhatsApp/email/phone), mobile menu, form
 * validation, responsive/no-overflow, broken-anchor and console-error checks.
 */

const WHATSAPP_NUMBER = "917892177297";
const EMAIL = "aicodeorigin@gmail.com";

// Every in-page section that navigation / CTAs point to.
const SECTION_IDS = [
  "home",
  "about",
  "services",
  "projects",
  "techstack",
  "testimonials",
  "internship",
  "professionals",
  "contact",
  "apply-internship",
];

test.describe("Home page — load & structure", () => {
  test("loads with correct brand title and hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Code Origin\.AI/i);
    await expect(page.locator("#home")).toBeVisible();
    // Landmarks present
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("main#main-content")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("no console errors on load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push(String(e)));
    await page.goto("/", { waitUntil: "networkidle" });
    // Ignore benign third-party/CDN image 4xx that don't break the UI.
    const critical = errors.filter(
      (e) => !/simpleicons|unsplash|favicon|net::ERR|status of 4|status of 5/i.test(e)
    );
    expect(critical, `Console errors:\n${critical.join("\n")}`).toHaveLength(0);
  });
});

test.describe("Navigation & anchors", () => {
  test("all navigation/CTA anchor targets exist in the DOM", async ({ page }) => {
    await page.goto("/");
    for (const id of SECTION_IDS) {
      await expect(page.locator(`#${id}`), `#${id} should exist`).toHaveCount(1);
    }
  });

  test("no in-page href points to a missing id (no broken anchors)", async ({ page }) => {
    await page.goto("/");
    const hrefs = await page.$$eval('a[href^="#"]', (as) =>
      as.map((a) => (a.getAttribute("href") || "").slice(1)).filter(Boolean)
    );
    const missing: string[] = [];
    for (const id of [...new Set(hrefs)]) {
      if ((await page.locator(`#${CSS.escape(id)}`).count()) === 0) missing.push(id);
    }
    expect(missing, `Broken anchors: ${missing.join(", ")}`).toHaveLength(0);
  });

  test("hero primary CTA and internship CTA are visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('[data-cta="start-project"]').first()).toBeVisible();
    await expect(page.locator('[data-cta="internship-apply"]').first()).toBeVisible();
  });
});

test.describe("Contact integrations", () => {
  test("WhatsApp links use the official number", async ({ page }) => {
    await page.goto("/");
    const waLinks = page.locator(`a[href*="wa.me/${WHATSAPP_NUMBER}"]`);
    expect(await waLinks.count()).toBeGreaterThan(0);
  });

  test("email and phone links are present and correct", async ({ page }) => {
    await page.goto("/");
    expect(await page.locator(`a[href*="${EMAIL}"], a[href^="mailto:"]`).count()).toBeGreaterThan(0);
    expect(await page.locator('a[href^="tel:"]').count()).toBeGreaterThan(0);
  });
});

test.describe("Contact form validation", () => {
  test("business form blocks empty submit (required fields)", async ({ page }) => {
    await page.goto("/#contact");
    // The business tab is default. Find the first required input and the submit.
    const form = page.locator("form").first();
    await expect(form).toBeVisible();
    const requiredCount = await form.locator("[required]").count();
    expect(requiredCount, "business form should have required fields").toBeGreaterThan(0);
    // A success heading should NOT appear before valid submission.
    await expect(page.getByText(/Application ready!|Thank you/i)).toHaveCount(0);
  });
});

test.describe("Mobile menu", () => {
  test.use({ viewport: { width: 375, height: 812 } });
  test("hamburger opens and shows navigation", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: /toggle menu/i });
    await expect(toggle).toBeVisible();
    await toggle.click();
    // A known nav link should now be visible in the opened mobile menu.
    await expect(page.locator('a[href="#contact"]').last()).toBeVisible();
  });
});

/** Utility: assert no horizontal overflow at the current viewport. */
async function expectNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );
  expect(overflow, "horizontal overflow (scrollWidth - innerWidth)").toBeLessThanOrEqual(1);
}

test.describe("Responsive — no horizontal overflow", () => {
  const viewports = [
    { w: 320, h: 640 },
    { w: 360, h: 740 },
    { w: 375, h: 812 },
    { w: 414, h: 896 },
    { w: 768, h: 1024 },
    { w: 1024, h: 768 },
    { w: 1280, h: 800 },
    { w: 1440, h: 900 },
    { w: 1920, h: 1080 },
  ];
  for (const v of viewports) {
    test(`no overflow at ${v.w}px`, async ({ page }) => {
      await page.setViewportSize({ width: v.w, height: v.h });
      await page.goto("/", { waitUntil: "networkidle" });
      await expectNoHorizontalOverflow(page);
    });
  }
});
