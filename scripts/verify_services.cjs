const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 2000 });

  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);

  // Scroll and screenshot Services
  await page.evaluate(() => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(__dirname, '../verification/services_section.png') });

  await browser.close();
})();
