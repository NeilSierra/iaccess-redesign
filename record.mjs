import { chromium } from "playwright";
import fs from "fs";

// Ensure videos folder exists
if (!fs.existsSync("videos")) {
  fs.mkdirSync("videos", { recursive: true });
}

// Active local port (checked: 3000 is running)
const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;

(async () => {
  console.log(`Launching browser and recording to videos/ folder...`);
  const browser = await chromium.launch({ headless: true });
  
  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
      size: { width: 1280, height: 720 },
    },
    viewport: { width: 1280, height: 720 },
  });

  const page = await context.newPage();

  console.log(`Navigating to ${BASE_URL}...`);
  await page.goto(`${BASE_URL}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  // 1. Home Page walkthrough
  console.log("Touring Home page...");
  await page.evaluate(async () => {
    window.scrollBy({ top: 350, behavior: "smooth" });
  });
  await page.waitForTimeout(1500);

  await page.evaluate(async () => {
    window.scrollBy({ top: 500, behavior: "smooth" });
  });
  await page.waitForTimeout(1500);

  await page.evaluate(async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  await page.waitForTimeout(1500);

  // 2. Signup Page walkthrough
  console.log(`Navigating to ${BASE_URL}/signup...`);
  await page.goto(`${BASE_URL}/signup`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  // Trigger JAI Modal if button exists
  const jaiButton = page.locator("button:has-text('What is JAI?')");
  if (await jaiButton.isVisible()) {
    await jaiButton.click();
    await page.waitForTimeout(1500);

    const closeBtn = page.locator("button:has-text('Got it'), button[aria-label='Close']").first();
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(1000);
    }
  }

  // 3. Terms & Conditions walkthrough
  console.log(`Navigating to ${BASE_URL}/terms...`);
  await page.goto(`${BASE_URL}/terms`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  await page.evaluate(async () => {
    window.scrollBy({ top: 400, behavior: "smooth" });
  });
  await page.waitForTimeout(1500);

  // 4. Return to Home
  console.log(`Returning to ${BASE_URL}...`);
  await page.goto(`${BASE_URL}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  console.log("Closing browser and finalizing video file...");
  await context.close();
  await browser.close();

  console.log("Recording finished! Check the 'videos/' folder for the recorded video.");
})();

